import express from "express";
// empêche les erreus de cors
import cors from "cors";
import fs from "fs/promises";
import { nanoid } from "nanoid";
import { fileURLToPath } from "url";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3000;

//permet d'utiliser les entête de cors qui vont empêcher les erreurs
app.use(cors());
//permet la lecture du json
app.use(express.json());

// on fait un chemin de db.json pour qu'il lise les donnéess
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, "db.json");
console.log(DB_FILE);

//On lit le fichier
async function readDB() {
  //permet de lister les donnéees
  const data = await fs.readFile(DB_FILE, "utf-8");
  return JSON.parse(data);
}

async function writeDB(content) {
  await fs.writeFile(DB_FILE, JSON.stringify(content, null, 2));
}

//ROUTES

app.get("/", (req, res) => {
  res.send("API Coloc : ok");
});

//permet la lecture et le listing
app.get("/listings", async (req, res) => {
  try {
    const db = await readDB();
    res.json(db.listings);
  } catch (err) {
    console.error("Impossible de lire la db:", err);
    res.status(500).json({ err: "Le serveur a une erreur" });
  }
});

// lecture de l'annonce + ses détails
app.get("/listings/:id", async (req, res) => {
  try {
    const db = await readDB();
    const listing = db.listings.find((l) => l.id === req.params.id);
    if (!listing) return res.status(404).json({ error: "Annonce inexistante" });
    res.json(listing);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Le serveur a une erreur" });
  }
});

//creation de l'annonce
app.post("/listings", async (req, res) => {
  try {
    const db = await readDB();
    const nouvelleAnnonce = { id: nanoid(8), ...req.body };
    db.listings.push(nouvelleAnnonce);
    await writeDB(db);
    res.status(201).json(nouvelleAnnonce);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Le serveur a une erreur" });
  }
});

// editer l'annonce
app.put("/listings/:id", async (req, res) => {
  try {
    const db = await readDB();
    const index = db.listings.findIndex((l) => l.id === req.params.id);
    if (index === -1)
      return res.status(404).json({ error: "Annonce inexistante" });

    db.listings[index] = { ...db.listings[index], ...req.body };
    await writeDB(db);
    res.json(db.listings[index]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: "Le serveur a une erreur" });
  }
});

// supprimer l'annonce
app.delete("/listings/:id", async (req, res) => {
  try {
    const db = await readDB();
    const index = db.listings.findIndex((l) => l.id === req.params.id);
    if (index === -1)
      return res.status(404).json({ error: "Annonce inexistante" });

    const [removed] = db.listings.splice(index, 1);
    await writeDB(db);
    res.json(removed);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: "Le serveur a une erreur" });
  }
});

//lance le serv
app.listen(PORT, () => {
  console.log(`APP qui démarre sur le port : ${PORT}`);
});

import express from "express";
import cors from "cors";
// empêche les erreus de cors
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
//permet d'utiliser les entête de cors qui vont empêcher les erreurs
app.use(express.json());
//permet la lecture du json


//ROUTES

app.get("/", (req, res) => {
  res.send("Hello World");
});

//lance le serv
app.listenerCount(PORT, () => {
  console.log(`APP qui démarre sur le port : ${PORT}`);
});

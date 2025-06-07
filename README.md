🏠 Colocations

Application web fullstack permettant de gérer des annonces de colocation : création, modification, suppression et consultation d'annonces.

📋 Table des matières

   1. Fonctionnalités

   2. Technologies utilisées

   3. Installation

   4. Utilisation

   5. Structure du projet

   6. Contribuer

   7. Licence

🛠️ Techno utilisées

Frontend

    React

    Vite

    Tailwind CSS

    React Router

    React Hook Form

    Zod

Backend

    Node.js

    Express

    NanoID

    Stockage local avec un fichier db.json

🚀 1. Installation

    Cloner le dépôt : git@github.com:jhbkr/TestTechnique.git
    cd TestTechnique 
    
    2. Installer les dépendances :
    installer les dépendances du back
    cd back 
    npm i ou npm install c'est pareil 

    3. installer les dépendances du front
    cd front 
    npm i ou npm install aussi c'est la mêle chose 

    Lancer l'application :
    retourner à la racine du projet. Si tu es dans le back tu fais cd ..
    pour lancer le back et tu fais un node server.js

    si tu est dans le front pareil cd .. puis npm run dev

    💻 Utilisation

    Dans le terminal faire un ctrl + click sur le http://localhost:5173/ 
    Tu peux maintenant tester l'applications :D
    CRUD pour les annonces 


STRUCTURE DU PROJET 
    TestTechnique/
├── back/               # Backend Express
│   ├── db.json         # Fichier de stockage des annonces
│   └── server.js       # Serveur Express
├── front/              # Frontend React
│   ├── src/
│   │   ├── components/ # Composants React
│   │   ├── hooks/      # Hooks
│   │   ├── pages/      # Pages de l'app
│   │   ├── App.jsx     # Composant principal
│   │   ├── index.css   # Styles globaux
│   │   └── main.jsx    # Point d'entrée
│   └── vite.config.js  # Configuration Vite
└── README.md           # Documentation du projet


Contact

Pour toute question ou suggestion, veuillez me contacter à ce mail : jihad.bakari@epitech.eu
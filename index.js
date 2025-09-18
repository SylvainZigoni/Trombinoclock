// Je charge les variables d'environnement depuis le fichier .env
import "dotenv/config";

import express from "express";
import router from "./app/routes/index.route.js";

const app = express();

// Configuration du moteur de template EJS
app.set("view engine", "ejs");
// Je spécifie le dossier contenant les vues (`*.ejs`)
app.set("views", "./app/views");

// Si j'ai une variable d'environnement PORT, je l'utilise, sinon je mets 3000
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// On va ajouter le dossier `public` comme dossier statique
app.use(express.static("./app/public"));

// On importe les routes
app.use(router);

app.listen(PORT, () => {
	console.log(`Le serveur est démarré sur http://localhost:${PORT}`);
});

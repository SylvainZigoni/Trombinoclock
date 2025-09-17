# Variable d'environnement

Ce sont des données qui varient en fonction de l'endroit où notre code est exécuté.

- Sur mon serveur en local (mon ordinateur), je lancerai mon serveur sur le port 3000.
- Sur le serveur de production (le serveur en ligne), je lancerai mon serveur sur le port 80.

## Mise en place

1. Créer un fichier `.env` à la racine de votre projet.
2. Ajouter vos variables d'environnement dans ce fichier, par exemple :
    ```plaintext
    PORT=3000
    ```
3. Installer la dépendance `dotenv` pour charger les variables d'environnement dans votre application Node.js :
    ```bash
    npm install dotenv
    ```
4. Dans votre fichier principal (par exemple `index.js`), ajouter le code suivant au début du fichier pour charger les variables d'environnement :
    ```javascript
    import 'dotenv/config';
    ```
5. Utiliser les variables d'environnement dans votre code avec `process.env.NOM_DE_LA_VARIABLE` :
    ```javascript
    const port = process.env.PORT || 3000; // Utilise le port défini
    ```

# Tombinoclock

## Mise en place du projet

1. Installer les dépendances : `npm i`
2. Créer le fichier `.env` à partir du fichier `.example.env`
3. Lancer le serveur : `npm run dev`

## Travaux a réaliser:

### Lister les étudiants d'une promotion

A partir de la page "détails d'une promo" il faut ajouter un lien "voir les étudiants de la promo" et réaliser la fonction associée

1. Mise en place d'une route paramétrée : `/promos/:id/students`
2. Mettre en place la méthode associée (apres etre passé par un controller)
3. Dans ce controller :
    1. Récupérer l'id de la promo ciblée
    2. Obtenir la liste des étudiants de la promo
    3. Envoyer l'utilisateur vers la vue adéquate (et transmettre a cette vu le jeu de donnée)
4. Construire la vue
5. Mettre le lien qui va bien dans "détails d'une promo"

### S'entrainer au SQL

Construire les requetes SQL (dans le dossier docs/SQL) pour obtenir :

1. Toutes les promos par ordre alphabetique
2. Tous les étudiants ordre alphabétique (nom puis prénom)
3. Tous les étudiants de la promo 135
4. Tous les étudiants dont le nom ou le prénom ressemble à "max"
5. Inserer dans la table "student" un étudiant au nom de "Chuck Norris" (qui est dans la promo numéro 5)
6. Ajouter une nouvelle promo dont le nom est "César"
7. Renommer la promo 5 en "Cleo"
8. Supprimer la promo 123

### Ajouter du SQL à nos controller

Remplacer l'utilisation des fichier .json par des requetes SQL qui font des appels à la BDD et qui retournent des données

1. Créer un client pour communiquer avec la base de donnée postgres
2. Modifier les fichiers :
    1. `promo.controller.js` pour utiliser un **dataMapper** dans lequel on réalise nos requetes SQL
    2. `admin.controller.js` pour utiliser un **dataMapper** dans lequel on réalise nos requetes SQL

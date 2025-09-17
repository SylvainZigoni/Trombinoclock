# Se connecter à notre Postgres

```bash
# Depuis n'importe où dans le terminal
sudo -i -u postgres psql
# MDP: js4life
```

On est censé voir afficher dans le terminal :

```
postgres=#
```

## Créer l'utilisateur

```sql
-- Ici on est sur notre poste à nous, pas sur le serveur de production
-- Pour des raisons de praticité, on utilise comme mot de passe le nom de l'utilisateur
CREATE USER trombi WITH PASSWORD 'trombi';
-- Ou bien
CREATE ROLE trombi WITH LOGIN PASSWORD 'trombi';
```

## Créer la base de données

```sql
-- On créer la base de données en précisant le propriétaire qui est l'utilisateur qu'on vient de créer
CREATE DATABASE trombi OWNER trombi;
```

## Quitter Postgres

```sql
\q
```

## Initialisation de la base de données

On a un fichier `./app/data/create_db.sql` qui contient toutes les requêtes SQL pour créer les tables et insérer des données de test.

```bash
# Depuis la racine du projet
# Je me connecte en tant que utilisateur trombi (`-U trombi`)
# Je me connecte à la base de données trombi (`-d trombi`)
# J'exécute le fichier SQL (`-f ./app/data/create_db.sql`)
psql -U trombi -d trombi -f ./app/data/create_db.sql
```

## Connexion à la base de données en tant que trombi

```bash
psql -U trombi -d trombi
```

## Quelques requête utiles

```sql
-- Voir les tables
\dt
-- Voir la structure d'une table
\d student
```

## Récupération de données

```sql
-- SELECT => récupère les colonnes suivantes
-- FROM => depuis la table suivante
SELECT id, name FROM promo;

-- Je veux récupérer toutes les colonnes
SELECT * FROM promo;

-- WHERE => avec la condition suivante
SELECT * FROM promo 
WHERE id = 888;

-- AND => et
SELECT * FROM promo
WHERE id = 888 
AND name = 'Dundee - Développeur Back End';

-- OR => ou
SELECT * FROM promo 
WHERE id = 888 
OR name = 'Dundee - Développeur Front End';

-- Like => qui contient
-- Le % représente 0 ou plusieurs caractères
SELECT * FROM promo 
WHERE name LIKE '%Back End%';

-- ILIKE => qui contient (sans tenir compte de la casse)
SELECT * FROM promo 
WHERE name ILIKE '%back end%';

-- Récupère les 10 premières lignes
SELECT * FROM promo
LIMIT 10;

-- Récupère 10 lignes en sautant les 10 premières
SELECT * FROM promo
LIMIT 10 
OFFSET 10;

-- Trier par ordre croissant (ASC) ou décroissant (DESC)
SELECT * FROM student
ORDER BY first_name ASC;
SELECT * FROM student
ORDER BY first_name DESC;
```

### Requête bonus

```sql
-- Compter le nombre d'étudiants
-- Le `*` signifie (utilise la colonne que tu veux, postgres prendra la plus optimisée)
SELECT COUNT(*) FROM student;

SELECT promo_id, COUNT(*) 
FROM student 
GROUP BY promo_id 
ORDER BY promo_id DESC;
```

## Intéragir avec les données

### Insérer des données

Pas besoin de préciser l'id, il est auto-incrémenté. C'est la BDD qui s'en occupe.

```sql
INSERT INTO promo (name, github_organization)
VALUES ('Dundee - Développeur YOLO', 'https://github.com/O-clock-Dundee');
```

### Mettre à jour des données

```sql
-- Je met à jour les données de la table promo
UPDATE promo
-- Je précise les nouvelles valeurs 
SET github_organization = 'YOLO'
-- ON OUBLIE PAS DE PRÉCISER LA CONDITION SINON TOUTES LES LIGNES SONT MODIFIÉES
WHERE id = 888;
```

### Supprimer des données

```sql
-- Je supprime de la table student
DELETE FROM student
-- ON OUBLIE PAS DE PRÉCISER LA CONDITION SINON TOUTES LES LIGNES SONT SUPPRIMÉES
WHERE id = 1;
```

## Créer une table

```sql
CREATE TABLE teacher (
  -- Entier qui s'auto-incrémente
  -- Je spécifie que c'est la clé primaire (PRIMARY KEY) => valeur unique
  id SERIAL PRIMARY KEY,
  -- VARCHAR => chaîne de caractères où l'on peut spécifier la taille max
  -- Si on ne précise pas, la taille max est de 255
  -- NOT NULL => la colonne ne peut pas être vide
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,

  -- TEXT => chaîne de caractères de taille illimitée
  -- Si NOT NULL n'est pas précisé, la colonne peut être vide
  bio TEXT,

  -- INT => entier (positif ou négatif, 0, 1, 2, -1, -2, ...)
  age INT,

  -- UNIQUE => la valeur doit être unique
  email VARCHAR(100) UNIQUE NOT NULL
);
```

## Modifier la structure d'une table

Très utile lorsqu'on a une BDD en production contenant déjà des données.

```sql
-- Ajouter une colonne
ALTER TABLE student
ADD COLUMN github_username VARCHAR(50);

-- Supprimer une colonne
ALTER TABLE student
DROP COLUMN github_username;

-- Renommer une colonne 
ALTER TABLE student
RENAME COLUMN github_username TO github_id;

-- Modifier le type d'une colonne
ALTER TABLE student
ALTER COLUMN github_id TYPE INT USING github_id::integer;
```

## Supprimer une table

```sql
DROP TABLE teacher;
```

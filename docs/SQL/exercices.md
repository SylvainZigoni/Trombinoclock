# Exercices

Depuis le site [https://o-clock-fs-js.github.io/ecommerce-bdd/](https://o-clock-fs-js.github.io/ecommerce-bdd/) tu as accès à une base de données pour une boutique en ligne où tu peux effectuer des requêtes SQL.

## SELECT

### Sélections simples

Récupère tous les utilisateurs de la table users.

```SQL
SELECT * FROM users;
```

Récupère uniquement les colonnes id, username et email des utilisateurs.

```SQL
SELECT id, username, email 
FROM users;
```

### Conditions avec WHERE

Récupère tous les produits dont le stock est supérieur à 50.

```sql
SELECT *
FROM products
WHERE stock > 50;
```

Récupère tous les produits dont le prix est strictement inférieur à 20€.

```sql
SELECT * 
FROM products
WHERE price < 20;
```

Récupère tous les produits dont le nom contient le mot "Pro", sans tenir compte de la casse.

```sql
SELECT * 
FROM products
WHERE name ILIKE '%pro%';
```

Récupère toutes les commandes dont le statut est "en cours" ou "en attente".

```sql
SELECT * 
FROM orders
WHERE status = 'En attente' OR status = 'En cours';

-- Ou

SELECT *
FROM orders
WHERE status IN ('En attente', 'En cours');
```

### Tri et pagination

Récupère les 5 produits les moins chers.

```sql
SELECT * 
FROM products
ORDER BY price ASC
LIMIT 5;
```

Récupère les 10 produits les plus récents, triés par date de création décroissante.

```sql
SELECT * 
FROM products
ORDER BY created_at DESC
LIMIT 10;
```

Récupère les commandes par date croissante, en ignorant les 5 premières.

```sql
SELECT * 
FROM orders
ORDER BY order_date ASC
OFFSET 5;
```

## Exercices INSERT

### Ajout de données

Ajoute un nouvel utilisateur :
```
username: quentin
email: quentin@example.com
password: password123
```

```sql
INSERT INTO users (username, email, password)
VALUES ('quentin', 'quentin@example.com', 'password123');
```

Ajoute une nouvelle catégorie High Tech avec une description "Matériel informatique et électronique".

```sql
INSERT INTO categories (name, description)
VALUES ('High Tech', 'Matériel informatique et électronique')
-- Si je veux récupérer les informations du nouvel enregistrement
-- Je rajoute un `RETURNING *;` à la fin de ma requête
RETURNING *;
```

Ajoute un nouveau produit dans la catégorie High Tech :
```
name: Clavier mécanique
description: Clavier RGB pour gamer
price: 89.99
stock: 30
category_id: id de la catégorie High Tech
```

```sql
INSERT INTO products (name, description, price, stock, category_id)
-- Ma catégorie High Tech a pour id 16
VALUES ('Clavier mécanique', 'Clavier RGB pour gamer', 89.99, 30, 16)
RETURNING *;
```

## Exercices UPDATE
### Modification des données

Mets à jour le stock du produit "Clavier mécanique" pour qu'il passe à 50.

```sql
UPDATE products
SET stock = 50
WHERE name = 'Clavier mécanique'
RETURNING *;
```

Change le statut de toutes les commandes "en attente" pour "expédiée".

```sql
UPDATE orders
SET status = 'Expédiée'
WHERE status = 'En attente'
RETURNING *;
```

## Exercices DELETE
### Suppression de données

Supprime le produit "Clavier mécanique" de la base de données.
⚠️ Assure-toi d'abord qu'il n'existe pas dans order_items.

```sql
DELETE FROM products
WHERE name = 'Clavier mécanique'
RETURNING *;
```

Supprime tous les utilisateurs qui n'ont jamais passé de commande.

```sql
DELETE FROM users
WHERE id NOT IN (
    SELECT user_id FROM orders
)
RETURNING *;
```

## Bonus Fonctions d'agrégation

Compte le nombre total de produits en stock. (SUM)
```sql
SELECT
  -- Compte le nombre total de produits en stock
  COUNT(*),
  -- Calcule la somme du stock de tous les produits 
  SUM(stock) 
FROM products
```

Récupère le prix moyen des produits. (AVG)
```sql
SELECT AVG(price)
FROM products;
```

Pour chaque catégorie (categories), compte combien de produits elle contient (COUNT + GROUP BY).

```sql
SELECT 
  category_id, 
  COUNT(*)
FROM products
GROUP BY category_id;
```

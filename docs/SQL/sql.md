# Challenge: SQL

## C02 - Écrire du SQL

```sql
-- toutes les promos, dans l'ordre alphabétique
-- Je choisis les colonnes, ici toutes les colonnes avec *
SELECT *
-- Je précise la table
FROM promo
-- Je précise l'ordre, trier par nom de manière ascendante (ASC)
ORDER BY name ASC;

-- tous les étudiants, dans l'ordre alphabétique des noms de famille et des prénoms
SELECT *
FROM student
ORDER BY last_name ASC, first_name ASC;

-- tous les étudiants de la promo 135
SELECT *
FROM student
WHERE promo_id = 135;

-- les étudiants dont le nom ou le prénom ressemble à "max"
SELECT *
FROM student
WHERE last_name ILIKE '%max%' OR first_name ILIKE '%max%';
```

-- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5

```sql
INSERT INTO student (first_name, last_name, promo_id)
VALUES ('Chuck', 'Norris', 5);
```

-- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'organisation github

```sql
INSERT INTO promo (name)
VALUES ('César');
```

-- Mettre a jour la promo 5 pour la renommer "Cleo"

```sql
UPDATE promo
SET name = 'Cleo'
WHERE id = 5;
```

-- Supprimer la promo 123

```sql
DELETE FROM promo
WHERE id = 123;
```

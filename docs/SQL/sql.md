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

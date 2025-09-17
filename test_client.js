import 'dotenv/config';

import client from './app/db/client.js';

async function getAllStudents() {
  // Si besoin de passer à la ligne, je peux utiliser les backticks (``)
  const result = await client.query(`
    SELECT * 
    FROM student;
  `);
  // Les données retournées par la requête sont stockées dans la propriété `rows`
  // Une requête SQL retourne TOUJOURS un tableau
  return result.rows;
}

// Avec le try catch, on essaye d'exécuter le code dans le try
// Si une erreur arrive, on l'attrape dans le catch
try {
  console.log(await getAllStudents());
} catch(error) {
  console.error('Erreur lors de la récupération des étudiants', error);
}

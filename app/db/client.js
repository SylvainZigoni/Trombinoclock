import { Client } from 'pg';

// Je me créer un client qui me permettra de faire mes requêtes SQL
const client = new Client(process.env.PG_URL);

// Je le connecte à la base de données
await client.connect();

// Et je l'exporte pour pouvoir l'utiliser dans les autres fichiers
export default client;

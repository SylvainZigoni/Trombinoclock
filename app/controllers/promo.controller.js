import promos from './../data/promos.json' with { type: 'json' };
import students from './../data/students.json' with { type: 'json' };

import client from '../db/client.js'


// - FONCTIONS

async function getPromos() {
    const results = await client.query(`
        SELECT *
        FROM promo;`);
    return results.rows;
}

async function getPromoById(pId){
    console.log(pId);
    const results = await client.query(`
        SELECT *
        FROM promo
        WHERE id = ${pId};`);
    return results.rows
}

async function getStudentByPromoId(pId){
    const results = await client.query(`
        SELECT *
        FROM student
        WHERE promo_id = ${pId};`);
    return results.rows[0]
}




const promoController = {
  async listPromos(req, res) {
    const promos =  await getPromos();
    console.log(promos)
    res.render('promos', {
      // Je passe les données à la vue
      // Je vais pouvoir récupérer une variable `promos` dans ma vue `promos.ejs`
      promos, // écriture raccourcie de `promos: promos`
    });
  },

  async detailPromo(req, res) {
    // Je suis sur une route paramétrée avec comme paramètre `:id` (voir dans promo.route.js)
    // Donc je peux récupérer l'id de la promo dans `req.params.id`
    const promoId = req.params.id;
    // Je vais chercher dans mon tableau de promos, celle avec l'id `promoId`
    const promo = await getPromoById(Number(promoId));

    // Si je ne trouve pas de promo avec cet id, je renvoie une erreur 404
    if (!promo) {
      res.status(404).send('Cette promo n\'existe pas');
      return;
    }
    console.log(promo);
    res.render('promo', {
      promo
    });
  },
  async listStudents(req, res) {
    // Je vais devoir récupérer la promo correspondant à l'id dans l'URL 
    // ainsi que la liste des étudiants de cette promo
    console.log(req.params.id);
    const promoId = req.params.id;
    // Je vais chercher dans mon tableau de promos, celle avec l'id `promoId`
    const promo = await getPromoById(Number(promoId));

    if(!promo) {
      res.status(404).send('Cette promo n\'existe pas');
      return;
    }

    const studentsFiltered = await getStudentByPromoId(Number(promoId));

    res.render('students', {
      promo,
      students: studentsFiltered
    });
  }
};

export default promoController;

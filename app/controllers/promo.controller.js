import promos from './../data/promos.json' with { type: 'json' };
import students from './../data/students.json' with { type: 'json' };

const promoController = {
  listPromos(req, res) {
    res.render('promos', {
      // Je passe les données à la vue
      // Je vais pouvoir récupérer une variable `promos` dans ma vue `promos.ejs`
      promos, // écriture raccourcie de `promos: promos`
    });
  },
  detailPromo(req, res) {
    // Je suis sur une route paramétrée avec comme paramètre `:id` (voir dans promo.route.js)
    // Donc je peux récupérer l'id de la promo dans `req.params.id`
    const promoId = req.params.id;
    // Je vais chercher dans mon tableau de promos, celle avec l'id `promoId`
    const promo = promos.find((promo) => promo.id === Number(promoId));

    // Si je ne trouve pas de promo avec cet id, je renvoie une erreur 404
    if (!promo) {
      res.status(404).send('Cette promo n\'existe pas');
      return;
    }
    
    res.render('promo', {
      promo
    });
  },
  listStudents(req, res) {
    // Je vais devoir récupérer la promo correspondant à l'id dans l'URL 
    // ainsi que la liste des étudiants de cette promo
    const promoId = req.params.id;
    // Je vais chercher dans mon tableau de promos, celle avec l'id `promoId`
    const promo = promos.find((promo) => promo.id === Number(promoId));

    if(!promo) {
      res.status(404).send('Cette promo n\'existe pas');
      return;
    }

    const studentsFiltered = students.filter(
      (student) => student.promo_id === Number(promoId)
    );

    res.render('students', {
      promo,
      students: studentsFiltered
    });
  }
};

export default promoController;

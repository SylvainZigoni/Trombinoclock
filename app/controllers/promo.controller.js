import promoDataMapper from '../dataMapper/promo.datamapper.js';
import promos from './../data/promos.json' with { type: 'json' };
import students from './../data/students.json' with { type: 'json' };

import client from '../db/client.js'



const promoController = {
    async listPromos(req, res) {
        try {
            const promos =  await promoDataMapper.getPromos();
            res.render('promos', {
            // Je passe les données à la vue
            // Je vais pouvoir récupérer une variable `promos` dans ma vue `promos.ejs`
            promos, // écriture raccourcie de `promos: promos`
            });
        } catch (error) {
            console.error(`Erreur lors de la récupération des promos`, error);
            res.status(500).send('Erreur lors de la récupération des promos')
        }
    },

    async detailPromo(req, res) {
        // Je suis sur une route paramétrée avec comme paramètre `:id` (voir dans promo.route.js)
        // Donc je peux récupérer l'id de la promo dans `req.params.id`
        const promoId = req.params.id;
        // Je vais chercher dans mon tableau de promos, celle avec l'id `promoId`

        try {
            const promo = await promoDataMapper.getPromoById(Number(promoId));

            // Si je ne trouve pas de promo avec cet id, je renvoie une erreur 404
            if (!promo) {
                res.status(404).send('Cette promo n\'existe pas');
                return;
            }

            res.render('promo', {
                promo
            });
        } catch(error) {
            console.error('Erreur lors de la récupération de la promo', error);
            res.status(500).send('Erreur lors de la récupération de la promo');
            return;
        }
    },

    async listStudents(req, res) {
        // Je vais devoir récupérer la promo correspondant à l'id dans l'URL 
        // ainsi que la liste des étudiants de cette promo

        const promoId = req.params.id;
        try {
            // Je vais chercher dans mon tableau de promos, celle avec l'id `promoId`
            const promo = await promoDataMapper.getPromoById(Number(promoId));

            if(!promo) {
                res.status(404).send('Cette promo n\'existe pas');
                return;
            }

            const studentsFiltered = await promoDataMapper.getStudentByPromoId(Number(promoId));
            res.render('students', {
                promo,
                students: studentsFiltered
            });
        } catch (error) {
            console.error('Erreur lors de la récupération des students ou promos');
            res.status(500).send('Erreur lors de la récupération des students ou promos')
        }
    }
};

export default promoController;

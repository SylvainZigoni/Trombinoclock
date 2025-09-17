import { Router } from 'express';
import promoController from '../controllers/promo.controller.js';

const promoRouter = Router();

promoRouter.get('/promos', promoController.listPromos);
// Je met un paramètre d'url `:id` ce qui me permettra de récupérer l'id de la promo dans `req.params.id`
// Le lien qui sera fait dans ma vue sera par exemple `/promos/1` ou `/promos/2`
promoRouter.get('/promos/:id', promoController.detailPromo);

promoRouter.get('/promos/:id/students', promoController.listStudents);

export default promoRouter;

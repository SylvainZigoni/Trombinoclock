import { Router } from 'express';
import mainRouter from './main.route.js';
import promoRouter from './promo.route.js';

const router = Router();

router.use(mainRouter);
router.use(promoRouter);

export default router;

import { Router } from "express";
import mainRouter from "./main.route.js";
import promoRouter from "./promo.route.js";
import adminRouter from "./admin.routes.js";

const router = Router();

router.use(mainRouter);
router.use(promoRouter);
router.use(adminRouter);

export default router;

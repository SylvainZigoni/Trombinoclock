import { Router } from "express";
import adminController from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.get("/admin/addPromo", adminController.addPromo);
adminRouter.post("/admin/addPromo", adminController.addPromoSubmit);

export default adminRouter;

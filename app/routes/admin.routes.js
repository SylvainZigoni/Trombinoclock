import { Router } from "express";
import adminController from "../controllers/admin.controller.js";

const adminRouter = Router();

adminRouter.get("/admin/addPromo", adminController.addPromo);
adminRouter.post("/admin/addPromo", adminController.addPromoSubmit);
adminRouter.get("/admin/addStudent", adminController.addStudent);
adminRouter.post("/admin/addStudent", adminController.addStudentSubmit);

export default adminRouter;

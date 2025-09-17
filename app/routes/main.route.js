import { Router } from 'express';
import mainController from '../controllers/main.controller.js';

const mainRouter = Router();

mainRouter.get('/', mainController.homepage);

export default mainRouter;

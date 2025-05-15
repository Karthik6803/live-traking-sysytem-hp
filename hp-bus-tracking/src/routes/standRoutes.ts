import { Router } from 'express';
import StandController from '../controllers/standController';

const router = Router();
const standController = new StandController();

export function setStandRoutes(app) {
    app.use('/api/stands', router);
    
    router.get('/', standController.getAllStands.bind(standController));
    router.get('/:id', standController.getStandDetails.bind(standController));
}
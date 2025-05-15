import { Router } from 'express';
import BusController from '../controllers/busController';

const router = Router();
const busController = new BusController();

export function setBusRoutes(app) {
    app.use('/api/buses', router);
    
    router.get('/', busController.getBusDetails.bind(busController));
    router.get('/arrival-time/:busId', busController.getBusArrivalTime.bind(busController));
}
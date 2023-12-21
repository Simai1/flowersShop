import { Router } from "express";

import orderController from "../controllers/order.js";
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.post('/', asyncRoute(orderController.addOrder));

router.get('/client/:clientId', asyncRoute(orderController.getClientOrders));

router.get('/:orderId', asyncRoute(orderController.getOrderProducts));

router.patch('/accept', asyncRoute(orderController.acceptOrder));

router.post('/add', asyncRoute(orderController.addToOrder));



export default router;
import { Router } from "express";

import productController from "../controllers/product.js";
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.route('/flowers').get(asyncRoute(productController.get))
    .post(asyncRoute(productController.create))
    .patch(asyncRoute(productController.updatePrice))
    .delete(asyncRoute(productController.delete))

router.route('/flowers/top3').get(asyncRoute(productController.get3Products));

router.route('/flowers/:name').get(asyncRoute(productController.getByFilter));

export default router;
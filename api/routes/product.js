import { Router } from "express";

import productController from "../controllers/product.js";
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.route('/flowers').get(asyncRoute(productController.get))
    .post(asyncRoute(productController.create))
    .patch(asyncRoute(productController.updatePrice))
    .delete(asyncRoute(productController.delete))

export default router;
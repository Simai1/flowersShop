import { Router } from "express";

import clientController from  "../controllers/client.js"
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.route('/').get(asyncRoute(clientController.get)); // dev

router.route('/:clientID').get(asyncRoute(clientController.getByID));

router.route('/dep').patch(asyncRoute(clientController.depCash));

export default router;
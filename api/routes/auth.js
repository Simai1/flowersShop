import { Router } from "express";

import authController from "../controllers/auth.js";
import {asyncRoute} from "../utils/errors.js";

const router = Router();

router.post('/login', asyncRoute(authController.login));

router.post('/register', asyncRoute(authController.register));


export default router;
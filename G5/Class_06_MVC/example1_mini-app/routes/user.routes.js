import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

const router = Router();

// /users
router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);

export default router;

import { Router } from 'express';
import UserController from '../controllers/user.controller.js';

// Each router defines the routes for a certain entity, in this case it is the Users routes (endpoints)

const router = Router();

// each of this routes start with /users, as it is used like that in the index.js
router.get('/', UserController.getAllUsers); // for each route we pass a reference to a method declared in the controller
router.get('/:id', UserController.getUserById);
router.post('/', UserController.createUser);

export default router;

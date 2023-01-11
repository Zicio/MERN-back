import { Router } from 'express';
import userController from '../controllers/user/index.js';
import { registerValidation } from '../middleware/validations/auth.js';

const userRouter = Router();

userRouter.post('/register', registerValidation, userController.registerUser);

export default userRouter;

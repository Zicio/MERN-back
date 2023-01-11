import { Router } from 'express';
import userController from '../controllers/user/index.js';

const userRouter = Router();

userRouter.post('/login', userController.loginUser);

export default userRouter;

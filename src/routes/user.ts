import { Router } from 'express';
import userController from '../controllers/user/index.js';
import {
  loginValidation,
  registerValidation,
} from '../middleware/validations/auth.js';
import checkAuth from '../middleware/checkAuth.js';

const userRouter = Router();

userRouter.post(
  '/auth/register',
  registerValidation,
  userController.registerUser,
);
userRouter.post('/auth/login', loginValidation, userController.authUser);
userRouter.get('/auth/profile', checkAuth, userController.getUser);

export default userRouter;

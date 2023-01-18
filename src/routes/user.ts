import { Router } from 'express';
import userController from '../controllers/user/index.js';
import { registerValidation } from '../middleware/validations/auth.js';
import checkAuth from '../middleware/checkAuth.js';

const userRouter = Router();

userRouter.post('/register', registerValidation, userController.registerUser);
userRouter.post('/auth/login', userController.authUser);
userRouter.get('/auth/profile', checkAuth, userController.getUser);

export default userRouter;

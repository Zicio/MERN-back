import { Router } from 'express';
import postController from '../controllers/post/index.js';

const postRouter = Router();

postRouter.post('/posts', postController.createPost);

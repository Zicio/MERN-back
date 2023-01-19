import { Router } from 'express';
import postController from '../controllers/post/index.js';
import { postCreateValidation } from '../middleware/validations/post.js';
import checkAuth from '../middleware/checkAuth.js';

const postRouter = Router();

postRouter.post(
  '/',
  checkAuth,
  postCreateValidation,
  postController.createPost,
);
postRouter.get('/', postController.getAllPosts);
postRouter.get('/:id', postController.getOnePost);
postRouter.delete('/:id', postController.deletePost);

export default postRouter;

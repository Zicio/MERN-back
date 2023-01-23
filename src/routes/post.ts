import { Router } from 'express';
import postController from '../controllers/post/index.js';
import { postCreateValidation } from '../middleware/validations/post.js';
import checkAuth from '../middleware/checkAuth.js';
import handleValidationErrors from '../middleware/validations/handleValidationErrors.js';

const postRouter = Router();

postRouter.post(
  '/',
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  postController.createPost,
);
postRouter.get('/', postController.getAllPosts);
postRouter.get('/:id', postController.getOnePost);
postRouter.delete('/:id', checkAuth, postController.deletePost);
postRouter.patch(
  '/:id',
  checkAuth,
  postCreateValidation,
  handleValidationErrors,
  postController.editPost,
);

export default postRouter;

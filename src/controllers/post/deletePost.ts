import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { Response } from 'express';
import Post from '../../models/DBModels/post.js';

const deletePost = async (req: ITypedRequestBody<undefined>, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndDelete(postId).exec();
    if (!post) {
      return res.status(404).json({
        message: 'Пост не найден',
      });
    }

    res.json({
      message: 'Пост успешно удален',
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось удалить пост',
    });
  }
};

export default deletePost;

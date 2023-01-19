import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { Response } from 'express';
import Post from '../../models/DBModels/post.js';

const getOnePost = async (req: ITypedRequestBody<undefined>, res: Response) => {
  try {
    const postId = req.params.id;
    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { viewsCount: 1 } },
      { returnDocument: 'after' },
    ).exec();

    if (!post) {
      return res.status(404).json({
        message: 'Пост не найден',
      });
    }

    return res.json({
      message: 'Пост успешно получен',
      post: post,
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось получить пост',
    });
  }
};

export default getOnePost;

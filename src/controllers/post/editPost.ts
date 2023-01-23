import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { Response } from 'express';
import Post from '../../models/DBModels/post.js';
import { IPost } from '../../models/TSModels/post.js';

const editPost = async (req: ITypedRequestBody<IPost>, res: Response) => {
  try {
    const postId = req.params.id;
    const { title, text, tags, imageUrl } = req.body;

    const post = await Post.updateOne(
      { _id: postId },
      {
        title,
        text,
        tags,
        imageUrl,
        user: req.userId,
      },
    ).exec();

    res.json({ message: 'Пост успешно изменен', post });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось изменить пост',
    });
  }
};

export default editPost;

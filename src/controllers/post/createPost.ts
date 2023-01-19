import { Response } from 'express';
import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { IPost } from '../../models/TSModels/post.js';
import Post from '../../models/DBModels/post.js';

const createPost = async (req: ITypedRequestBody<IPost>, res: Response) => {
  try {
    const { title, text, tags, imageUrl } = req.body;
    const doc = new Post({
      title,
      text,
      tags,
      imageUrl,
      user: req.userId,
    });

    const post = await doc.save();
    res.json({ message: 'Пост успешно создан', post });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось создать новый пост',
    });
  }
};

export default createPost;

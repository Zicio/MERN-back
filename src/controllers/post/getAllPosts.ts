import { ITypedRequestBody } from '../../models/TSModels/general.js';
import { Response } from 'express';
import Post from '../../models/DBModels/post.js';

const getAllPosts = async (
  req: ITypedRequestBody<undefined>,
  res: Response,
) => {
  try {
    const posts = await Post.find().populate('user').exec();
    //TODO подумать над удалением passwordHash

    // for (const post of posts) {
    //   delete (post.user as IUserModel).password
    // }
    res.json({
      message: 'Все посты успешно получены',
      posts,
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось получить посты',
    });
  }
};

export default getAllPosts;

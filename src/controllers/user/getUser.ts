import User from '../../models/DBModels/user.js';
import { Response } from 'express';
import setToken from '../../utils/setToken.js';
import { ITypedRequestBody } from '../../models/TSModels/general.js';

export default async (req: ITypedRequestBody<undefined>, res: Response) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: docUserPassword, ...userData } = user._doc;

    res.json({
      ...userData,
      token: setToken(user._id),
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось получить информацию о пользователе',
    });
  }
};

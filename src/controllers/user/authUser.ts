import { Response } from 'express';
import User from '../../models/DBModels/user.js';
import { IUser } from '../../models/TSModels/user.js';
import bcrypt from 'bcrypt';
import setToken from '../../utils/setToken.js';
import { ITypedRequestBody } from '../../models/TSModels/general.js';

export default async (req: ITypedRequestBody<IUser>, res: Response) => {
  try {
    const user = await User.findOne({ email: req.body.email }).exec();

    if (!user) {
      return res.status(404).json({
        message: 'Пользователь не найден',
      });
    }

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user._doc.password,
    );

    if (!isValidPass) {
      return res.status(400).json({
        message: 'Неверный логин/пароль',
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: docUserPassword, ...userData } = user._doc;

    res.json({
      message: 'Пользователь успешно авторизован',
      user: {
        ...userData,
        token: setToken(user._id),
      },
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось авторизоваться',
    });
  }
};

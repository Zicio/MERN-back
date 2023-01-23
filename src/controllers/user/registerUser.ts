import { Response } from 'express';
import bcrypt from 'bcrypt';
import User from '../../models/DBModels/user.js';
import { IUser } from '../../models/TSModels/user.js';
import setToken from '../../utils/setToken.js';
import { ITypedRequestBody } from '../../models/TSModels/general.js';

export default async (req: ITypedRequestBody<IUser>, res: Response) => {
  try {
    const { email, userName, password, avatarUrl } = req.body;

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new User({
      email,
      userName,
      password: passwordHash,
      avatarUrl,
    });

    const user = await doc.save();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: docUserPassword, ...userData } = user._doc;

    res.json({
      message: 'Пользователь успешно зарегистриован',
      user: {
        ...userData,
        token: setToken(user._id),
      },
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось зарегистрироваться',
    });
  }
};

import { Response } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import User from '../../models/user.js';
import { ITypedRequestBody, IUser, IUserModel } from '../../models/modelsTS.js';
import setToken from '../../utils/setToken.js';

export default async (req: ITypedRequestBody<IUser>, res: Response) => {
  try {
    const { email, userName, password, avatarUrl } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const doc = new User({
      email,
      userName,
      password: passwordHash,
      avatarUrl,
    });

    const user: IUserModel = await doc.save();

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: docUserPassword, ...userData } = user._doc;

    res.json({
      ...userData,
      token: setToken(user._id),
    });
  } catch (e) {
    console.log(e as Error);
    res.status(500).json({
      message: 'Не удалось зарегистрироваться',
    });
  }
};

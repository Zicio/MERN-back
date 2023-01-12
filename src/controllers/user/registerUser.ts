import { Response } from 'express';
import bcrypt from 'bcrypt';
import { validationResult } from 'express-validator';
import User from '../../models/user.js';
import { IUser, TypedRequestBody } from '../../models/modelsTS.js';

const registerUser = async (req: TypedRequestBody<IUser>, res: Response) => {
  const { email, username, password, avatarUrl } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, salt);

  const doc = new User<IUser>({
    email,
    username,
    password: passwordHash,
    avatarUrl,
  });

  const user = await doc.save();

  res.json({
    success: true,
    user,
  });
  // const token = jwt.sign(
  //   {
  //     email: req.body.email,
  //     userName: req.body.userName,
  //   },
  //   process.env.JWT_KEY as string,
  // );
  //
  // res.json({
  //   success: true,
  //   token,
  // });
};

export default registerUser;

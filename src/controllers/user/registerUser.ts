import { Request, Response } from 'express';
import { validationResult } from 'express-validator';

const registerUser = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  res.json({
    success: true,
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

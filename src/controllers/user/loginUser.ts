import { Request, Response } from 'express';

const loginUser = async (req: Request, res: Response) => {
  res.json('true');
};

export default loginUser;

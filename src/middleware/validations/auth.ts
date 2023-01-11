import { body } from 'express-validator';

export const registerValidation = [
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),
  body('userName').isLength({ min: 4 }),
  body('avatarUrl').optional().isURL(),
];

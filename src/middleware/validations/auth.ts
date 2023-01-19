import { body } from 'express-validator';

export const registerValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Введите пароль (5 символов)').isString().isLength({
    min: 5,
  }),
  body('userName', 'Введите имя (минимум 4 символа)')
    .isString()
    .isLength({ min: 4 }),
  body('avatarUrl', 'Неверная ссылка на аватарку').optional().isURL(),
];

export const loginValidation = [
  body('email', 'Неверный формат почты').isEmail(),
  body('password', 'Введите пароль (5 символов)').isString().isLength({
    min: 5,
  }),
];

import { body } from 'express-validator';

export const postCreateValidation = [
  body('title', 'Введите заголовок статьи (минимум 3 символа)')
    .isString()
    .isLength({
      min: 3,
    }),
  body('text', 'Введите текст статьи (минимум 10 символов)')
    .isString()
    .isLength({
      min: 10,
    }),
  body('tags', 'Неверный формат тэгов (укажите массив)').optional().isArray(),
  body('imageUrl', 'Неверная ссылка на изображение').optional().isURL(),
];

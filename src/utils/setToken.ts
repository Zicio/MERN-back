import jwt from 'jsonwebtoken';

const setToken = (id: string) => {
  return jwt.sign(
    {
      _id: id,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );
};

export default setToken;

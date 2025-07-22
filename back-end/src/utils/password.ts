import bcrypt from "bcrypt";

const SALT = 10;

export const generatePassword = (password: string) => {
  return bcrypt.hash(password, SALT);
};

export const comparePassword = (password: string, passwordHash: string) => {
  return bcrypt.compare(password, passwordHash);
};

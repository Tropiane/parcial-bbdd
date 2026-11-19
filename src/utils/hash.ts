import bcrypt from 'bcrypt';

const salt = 10;

export const hashPassword = (password: string) => bcrypt.hashSync(password, salt);

export const comparePassword = (password: string, hash: string) => bcrypt.compareSync(password, hash);
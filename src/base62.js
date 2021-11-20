import basex from 'base-x';
const b62 = basex('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
export const encode = b62.encode;
export const decode = b62.decode;

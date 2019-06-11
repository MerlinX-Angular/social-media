const crypt = require('crypto');
const util = require('util');
import * as jwt from 'jsonwebtoken';
import * as fs from 'fs';
export const randomBytes = crypt.randomBytes;
export const signJWT = util.promisify(jwt.sign);

const RSA_PRIVATE = fs.readFileSync('./server/security/private.key');
const RSA_PUBLIC = fs.readFileSync('./server/security/public.key');

export async function createSessionToken(userId){
  return signJWT({},RSA_PRIVATE, {
    algorithm:'RS256',
    expiresIn:600,
    subject:userId
  })
}
export function decodeJwt(token) {
  const payload = jwt.verify(token,RSA_PUBLIC);
  return payload;
}

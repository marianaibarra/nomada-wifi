import { createCipheriv, randomBytes, scrypt } from 'node:crypto';
import { promisify } from 'node:util';

const iv = randomBytes(16);
const password = 'this-is-a-super-secret-password';

export async function encryptPassword(pass: string): Promise<string> {
  const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);
  const encryptedPassword = Buffer.concat([
    cipher.update(pass),
    cipher.final(),
  ]);

  return encryptedPassword.toString('hex');
}

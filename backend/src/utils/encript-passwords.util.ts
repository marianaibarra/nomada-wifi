import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

export async function hashPassword(pass: string): Promise<string> {
  const hash = await bcrypt.hash(pass, saltOrRounds);
  return hash;
}

export async function verifyPassword(
  password: string,
  encryptedPassword: string,
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, encryptedPassword);
  return isMatch;
}

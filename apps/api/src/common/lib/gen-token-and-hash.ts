import * as crypto from 'crypto';

/**
 *
 * @param token string token to hash
 * @returns string hashed token
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 *
 * @returns {token, hashedToken}
 */
export function genTokenAndHash() {
  const token = crypto.randomBytes(32).toString('hex');
  const hashedToken = hashToken(token);
  return { token, hashedToken };
}

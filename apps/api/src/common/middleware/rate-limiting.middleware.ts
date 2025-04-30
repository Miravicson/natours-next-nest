import rateLimit, { Options } from 'express-rate-limit';

const rateLimitConfig: Partial<Options> = {
  max: 100,
  windowMs: 60 * 60 * 1000, // 1 hour
  message: 'You have made too many request, please try again in an hour.',
  standardHeaders: true,
  legacyHeaders: false,
};

export const applyRateLimit = rateLimit(rateLimitConfig);

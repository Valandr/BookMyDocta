import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'preprod', 'production']).default('development'),
  PORT: z.coerce.number().default(3000),
  APP_NAME: z.string().default('bookmydocta-backend'),
  APP_VERSION: z.string().default('1.0.0'),
  API_PREFIX: z.string().default('/api'),
  FRONTEND_ORIGIN: z.string().default('http://localhost:5173'),
  POSTGRES_HOST: z.string().default('localhost'),
  POSTGRES_PORT: z.coerce.number().default(5432),
  POSTGRES_DB: z.string().default('bookmydocta'),
  POSTGRES_USER: z.string().default('bookmydocta'),
  POSTGRES_PASSWORD: z.string().default('change_me'),
  RATE_LIMIT_WINDOW_MS: z.coerce.number().default(900000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().default(100),
  LOG_LEVEL: z.enum(['fatal', 'error', 'warn', 'info', 'debug', 'trace']).default('info'),
});

export const env = envSchema.parse(process.env);

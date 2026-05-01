import { createApp } from '@/app';
import { env } from '@/infrastructure/config/env';
import { postgresPool } from '@/infrastructure/database/postgres';
import { logger } from '@/infrastructure/logger/logger';
import { PostgresSystemStatusRepository } from '@/infrastructure/repositories/PostgresSystemStatusRepository';

const app = createApp({
  systemStatusRepository: new PostgresSystemStatusRepository(postgresPool),
  config: {
    appName: env.APP_NAME,
    version: env.APP_VERSION,
    environment: env.NODE_ENV,
    apiPrefix: env.API_PREFIX,
    frontendOrigin: env.FRONTEND_ORIGIN,
  },
});

app.listen(env.PORT, () => {
  logger.info({ port: env.PORT }, 'Backend server started');
});

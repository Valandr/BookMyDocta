import { Router } from 'express';
import { HealthController } from '@/interfaces/http/controllers/HealthController';
import { VersionController } from '@/interfaces/http/controllers/VersionController';

interface SystemRoutesDependencies {
  healthController: HealthController;
  versionController: VersionController;
}

export const createSystemRoutes = ({
  healthController,
  versionController,
}: SystemRoutesDependencies): Router => {
  const router = Router();

  router.get('/health', healthController.handle);
  router.get('/version', versionController.handle);

  return router;
};

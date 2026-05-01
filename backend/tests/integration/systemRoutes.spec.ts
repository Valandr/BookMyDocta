import request from 'supertest';
import { createApp } from '@/app';
import type { SystemStatusRepository } from '@/domain/repositories/SystemStatusRepository';

describe('system routes', () => {
  const repository: SystemStatusRepository = {
    isDatabaseReachable: jest.fn().mockResolvedValue(true),
  };

  const app = createApp({
    systemStatusRepository: repository,
    config: {
      appName: 'backend-test',
      version: '1.0.0',
      environment: 'test',
      apiPrefix: '/api',
      frontendOrigin: 'http://localhost:5173',
    },
  });

  it('GET /api/health returns service health', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.database).toBe('up');
  });

  it('GET /api/version returns version metadata', async () => {
    const response = await request(app).get('/api/version');

    expect(response.status).toBe(200);
    expect(response.body.version).toBe('1.0.0');
    expect(response.body.environment).toBe('test');
  });
});

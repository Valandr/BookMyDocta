import { GetHealthStatusUseCase } from '@/application/use-cases/GetHealthStatusUseCase';
import type { SystemStatusRepository } from '@/domain/repositories/SystemStatusRepository';

describe('GetHealthStatusUseCase', () => {
  it('returns the expected health payload', async () => {
    const repository: SystemStatusRepository = {
      isDatabaseReachable: jest.fn().mockResolvedValue(true),
    };

    const useCase = new GetHealthStatusUseCase(repository, {
      appName: 'backend-test',
      version: '1.2.3',
      environment: 'test',
    });

    const result = await useCase.execute();

    expect(result.status).toBe('ok');
    expect(result.database).toBe('up');
    expect(result.service).toBe('backend-test');
    expect(result.version).toBe('1.2.3');
  });
});

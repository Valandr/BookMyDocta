import { apiClient } from '@/services/api';

describe('apiClient', () => {
  it('returns the parsed health response', async () => {
    const fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        status: 'ok',
        service: 'backend-test',
        version: '1.0.0',
        database: 'up',
        timestamp: '2026-01-01T00:00:00.000Z',
      }),
    });

    global.fetch = fetchMock as typeof fetch;

    const result = await apiClient.getHealthStatus();

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(result.service).toBe('backend-test');
    expect(result.database).toBe('up');
  });
});

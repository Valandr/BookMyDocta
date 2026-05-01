export interface HealthResponse {
  status: string;
  service: string;
  version: string;
  database: string;
  timestamp: string;
}

const DEFAULT_API_BASE_URL = 'http://localhost:3000/api';

const getApiBaseUrl = (): string => {
  const runtimeWindow = window as Window & {
    __APP_CONFIG__?: {
      VITE_API_BASE_URL?: string;
    };
  };

  return runtimeWindow.__APP_CONFIG__?.VITE_API_BASE_URL || DEFAULT_API_BASE_URL;
};

export const apiClient = {
  async getHealthStatus(): Promise<HealthResponse> {
    const response = await fetch(`${getApiBaseUrl()}/health`);

    if (!response.ok) {
      throw new Error('Failed to fetch API health status');
    }

    return (await response.json()) as HealthResponse;
  },
};

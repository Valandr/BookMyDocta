export const swaggerDocument = {
  openapi: '3.0.3',
  info: {
    title: 'BookMyDocta Starter API',
    version: '1.0.0',
    description: 'Starter backend API with Clean Architecture and secure Express defaults.',
  },
  servers: [{ url: '/api' }],
  paths: {
    '/health': {
      get: {
        summary: 'Get API health status',
        responses: {
          '200': {
            description: 'Health status',
          },
        },
      },
    },
    '/version': {
      get: {
        summary: 'Get API version metadata',
        responses: {
          '200': {
            description: 'Version metadata',
          },
        },
      },
    },
  },
};

# API

## Base URL

- Development: `http://localhost:3000/api`
- Swagger UI: `http://localhost:3000/api/docs`

## Routes

- `GET /api/health`: returns API and database status.
- `GET /api/version`: returns service metadata and environment.

## REST Conventions

- Use nouns for resources.
- Keep controllers thin and map transport concerns only.
- Return meaningful HTTP status codes and stable JSON payloads.

## Swagger

- OpenAPI UI is exposed at `/api/docs`.
- Update the local Swagger document when adding or changing routes.

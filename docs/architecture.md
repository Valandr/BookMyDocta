# Architecture

## Clean Architecture

The backend follows these layers:

- `domain`: entities and repository contracts, no framework dependency.
- `application`: use cases, DTOs and ports.
- `infrastructure`: database, config, logging and security integrations.
- `interfaces`: HTTP controllers, routes and middlewares.

Allowed dependency direction:

- `interfaces` -> `application` -> `domain`
- `infrastructure` -> `application` and `domain`
- `domain` -> no outer layer

## Request Flow

Example:

`route -> controller -> use case -> repository interface -> repository implementation -> database`

For `GET /api/health`:

1. Express route maps the request.
2. Controller delegates to `GetHealthStatusUseCase`.
3. The use case reads the `SystemStatusRepository` contract.
4. The PostgreSQL repository implementation checks DB reachability.
5. The use case returns a transport-safe DTO to the controller.

## Coupling Rules

- Do not import Express objects into domain or application layers.
- Do not call PostgreSQL directly from controllers.
- Do not place HTTP fetch logic directly inside Vue page templates.
- Shared helpers must stay generic and not become a dumping ground.

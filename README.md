# BookMyDocta Fullstack Starter

Professional fullstack starter for SaaS apps, REST APIs, web platforms and portfolio-grade projects. The repository ships as a monorepo with a TypeScript Express backend, a TypeScript Vue frontend, Docker-based local execution, automated quality gates and AI collaboration guidance.

## Stack

- Backend: Node.js, Express, TypeScript, PostgreSQL, Jest, Swagger, dotenv
- Frontend: Vue 3, TypeScript, Tailwind CSS, Storybook, Jest, Cypress
- Quality: ESLint, Prettier, Husky, Commitlint, Conventional Commits
- DevOps: Docker, Docker Compose, GitHub Actions CI/CD, Makefile

## Repository Structure

```text
project-root/
  backend/
  frontend/
  docker/
  .github/workflows/
  docs/
  AGENTS.md
  skills.md
  Makefile
  docker-compose.yml
  docker-compose.dev.yml
  docker-compose.preprod.yml
  docker-compose.prod.yml
```

## Architecture

- Backend follows Clean Architecture with explicit layers.
- Frontend separates pages, components, composables and services.
- HTTP calls are centralized in `frontend/src/services`.
- API integration is demonstrated by `GET /api/health`.

More details:

- [Architecture](docs/architecture.md)
- [Security](docs/security.md)
- [API](docs/api.md)

## Prerequisites

- Node.js 20+
- npm 10+
- Docker and Docker Compose

## Installation

```bash
cp .env.example .env
cp backend/.env.example backend/.env
cp frontend/.env.example frontend/.env
make install
```

## Local Development

```bash
make dev
```

Or directly:

```bash
docker compose -f docker-compose.dev.yml up --build
```

Services:

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000/api`
- Swagger: `http://localhost:3000/api/docs`
- PostgreSQL: `localhost:5432`

## Makefile Commands

- `make install`
- `make dev`
- `make build`
- `make test`
- `make test-backend`
- `make test-frontend`
- `make test-e2e`
- `make coverage`
- `make lint`
- `make format`
- `make docker-up`
- `make docker-down`
- `make docker-logs`
- `make db-reset`

## Environment Variables

- Root examples: [`.env.example`](.env.example)
- Backend examples: [`backend/.env.example`](backend/.env.example)
- Frontend examples: [`frontend/.env.example`](frontend/.env.example)

Never commit real secrets.

## Tests and Coverage

```bash
make test
make coverage
```

- Backend coverage output: `backend/coverage/`
- Frontend coverage output: `frontend/coverage/`

## Storybook

```bash
npm run storybook -w frontend
```

## Swagger

Swagger UI is available at `/api/docs`.

## Docker

- `docker-compose.dev.yml`: local development with hot reload
- `docker-compose.preprod.yml`: preproduction-like environment
- `docker-compose.prod.yml`: production-oriented baseline

## GitFlow and Commits

Branches:

- `main`
- `develop`
- `feature/*`
- `bugfix/*`
- `hotfix/*`
- `release/*`

Commit prefixes:

- `feat:`
- `fix:`
- `docs:`
- `refactor:`
- `test:`
- `chore:`
- `ci:`
- `build:`
- `perf:`

## CI/CD

- CI runs lint, coverage and builds on pushes and pull requests.
- CD contains ready-to-complete preprod and prod deployment jobs using GitHub Secrets.

## Security

- Helmet, CORS and rate limiting enabled on the backend
- Structured logging with redaction
- Sanitized `.env.example` files only

## Contributing

1. Create a branch from `develop`.
2. Keep the scope focused.
3. Add or update tests.
4. Run lint, tests and build before pushing.
5. Use Conventional Commits.

## Troubleshooting

- If `npm ci` fails in CI, ensure `package-lock.json` is committed.
- If the frontend cannot reach the backend, confirm `VITE_API_BASE_URL` and Docker ports.
- If PostgreSQL is unavailable, rebuild with `make db-reset`.

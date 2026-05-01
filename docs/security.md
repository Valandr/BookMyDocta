# Security

## Secrets and Environment Variables

- Real secrets must live only in environment variables or secret managers.
- Only `.env.example` files are versioned.
- GitHub Actions deployments must consume GitHub Secrets.

## Express Hardening

- `helmet` enabled by default.
- `cors` restricted through `FRONTEND_ORIGIN`.
- `express-rate-limit` enabled on the API.
- Input validation should be handled with `zod` validators before use cases.
- Centralized error handling avoids leaking internal stack traces.

## Logging

- Pino logger redacts sensitive request headers.
- Keep logs structured in preprod/prod.
- Do not log credentials, tokens or raw secret values.

## Dependencies

- Keep dependencies updated.
- Prefer established libraries with maintenance history.
- Review transitive vulnerabilities before production rollout.

## General Practices

- Keep Docker images minimal.
- Restrict production environment variables to what is required.
- Add TLS, reverse proxying and managed secrets before public deployment.

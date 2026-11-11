# nestjs

A TypeScript NestJS backend with authentication, user, and item modules backed by TypeORM and SQLite.

[Repository](https://github.com/MirzaAlbab/nestjs)

## Features

- Authentication and current-user components
- User and item modules with DTOs
- TypeORM persistence and SQLite databases
- Unit-test files and authentication end-to-end tests

## Technology

`@nestjs/core` ^10.0.0 · `sqlite3` ^5.1.7 · `typeorm` ^0.3.20

## Getting started

Install Node.js compatible with NestJS 10.

```bash
git clone https://github.com/MirzaAlbab/nestjs.git
cd nestjs
```

```bash
npm install
```

Review the development environment file and TypeORM configuration. Use a local development database rather than data you need to preserve.

```bash
npm run start:dev
```

The API listens on `http://localhost:3000`. Inspect module controllers for available routes.

## Development and checks

```bash
npm test
npm run test:e2e
npm run build
```

The repository includes authentication registration/session tests in `test/auth.e2e-spec.ts`.

## Project structure

- `src/` — Application source
- `test/` — Tests and examples

## Project notes

The application listens on port 3000. Review .env.development, .env.test, and module configuration for your local setup; the repository contains development and test database files.

## License

No root `LICENSE` file was present in the reviewed repository. Consult the repository owner about reuse; dependencies and third-party assets retain their own terms.

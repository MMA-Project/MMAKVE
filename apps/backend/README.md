# /apps/backend - MONO REPO

## DB tooling — Prisma Studio

We use Prisma and Prisma Studio for DB inspection in development. Start the DB container first (see `docker-compose.dev.yml`) and then open Prisma Studio from the backend package.

From repo root:

```bash
# start only the DB
docker compose -f docker-compose.dev.yml up -d db

# then from the backend package folder (or set DATABASE_URL env as described earlier):
pnpm --filter @mmakve/backend run studio
```

Prisma Studio will open a browser UI to browse and edit data. It's preferred to Adminer for this project.

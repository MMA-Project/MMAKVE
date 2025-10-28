# Backend (@mmakve/backend)

API Node/Express + Prisma (PostgreSQL) faisant partie du monorepo. Fournit l'authentification JWT, gestion des quêtes (WIP) et modèles de base (Users, Adventurers, etc.).

---

## 🚀 Stack

- Node.js (ESM)
- Express 4
- Prisma ORM + PostgreSQL
- JWT (jsonwebtoken)
- Sécurité: helmet, bcryptjs
- Tests: Vitest (+ Supertest prêt pour tests d'intégration)
- Monorepo: pnpm workspaces

---

## 🏗 Architecture rapide

```text
src/
  index.ts            # Entrée (boot server)
  server.ts           # Création express + middlewares globaux
  routes/             # Déclaration des routes
  controllers/        # Logique HTTP (parse req / formate res)
  services/           # Logique métier + accès Prisma
  middleware/         # Auth / rôles
  utils/              # Helpers (erreurs, etc.)
  generated/prisma/   # Client Prisma généré (ne pas éditer à la main)
```

---

## 📚 Documentation API (Swagger)

Swagger UI est disponible en dev sur :

- UI: <http://localhost:4000/api/docs>

On privilégie une doc “dans les routes” via des annotations JSDoc. Le schéma inclut déjà la sécurité Bearer (JWT) et des schémas de base. Ajoutez ou modifiez les blocs JSDoc directement à côté des handlers pour garder la doc à jour.

Exemple d’annotation :

```ts
/**
 * @openapi
 * /auth/login:
 *   post:
 *     tags: [Auth]
 *     summary: Authentifier un utilisateur
 */
```

---

## 🔐 Authentification & Autorisation

### 1. Login / Register

- POST `/api/auth/register` `{ username, password, role? }`
    - `role` optionnel (defaults `CLIENT`)
- POST `/api/auth/login` `{ username, password }` → `{ token }`

### 2. JWT

Payload minimal :

```json
{ "id": "<uuid>", "role": "AVENTURIER|ASSISTANT|CLIENT" }
```

`exp` est ajouté automatiquement selon `JWT_EXPIRES_IN` (par défaut 2h).

### 3. Middleware

```ts
authenticateToken; // Vérifie header Authorization + recharge user en BDD
authorizeRole(Role.ASSISTANT); // Vérifie rôle courant
```

Usage :

```ts
router.post("/quests", authenticateToken, authorizeRole(Role.ASSISTANT), handler);
```

### 4. Rôles (enum Prisma)

| Role       | Description rapide |
| ---------- | ------------------ |
| AVENTURIER | Joueur de base     |
| ASSISTANT  | Gestion avancée    |
| CLIENT     | Commanditaire      |

---

## 🧾 Format d'erreur unifié

Toutes les réponses d'erreur suivent la forme :

```json
{
    "error": { "code": "ERROR_CODE", "message": "Description", "details": {} }
}
```

Codes actuels principaux :

```text
AUTH_TOKEN_REQUIRED, AUTH_INVALID_TOKEN, AUTH_USER_NOT_FOUND,
AUTH_ACCESS_DENIED, NOT_AUTHENTICATED,
USERNAME_TAKEN, INVALID_CREDENTIALS, VALIDATION_ERROR, INTERNAL_ERROR
```

Helper: `utils/error.ts` (`sendError`, `AppError`).

---

## ⚙️ Installation / Démarrage

Depuis la racine du repo :

```bash
pnpm install

# Lancer uniquement la base Postgres (dev)
docker compose -f docker-compose.dev.yml up -d db

# Générer le client Prisma (ou après modif schema)
pnpm --filter @mmakve/backend run generate

# Lancer les migrations (création tables)
pnpm --filter @mmakve/backend run migrate

# Démarrer le serveur en dev (watch)
pnpm --filter @mmakve/backend run dev
```

Serveur par défaut sur `http://localhost:4000/api`.

Ping : `GET /api/ping` → `{ "message": "pong" }`.

---

## 🧪 Tests

Lancer les tests unitaires :

```bash
pnpm --filter @mmakve/backend test
```

Regarder en watch :

```bash
pnpm --filter @mmakve/backend test:watch
```

Tests actuels : `auth.service` (register/login, erreurs). Intégration (routes & middleware) à ajouter.

---

## 🔄 Prisma & Base de données

Fichier schema : `prisma/schema.prisma`.

Commandes utiles :

```bash
# Générer client
pnpm --filter @mmakve/backend run generate

# Nouvelle migration (interactif)
pnpm --filter @mmakve/backend run migrate

# Ouvrir Prisma Studio
pnpm --filter @mmakve/backend run studio
```

### Remise à zéro (attention destructive)

```bash
npx prisma migrate reset
```

### Variables d'environnement

Créer un `.env` (à la racine du repo si partagé, ou dans /apps/backend) :

```bash
DATABASE_URL=postgresql://user:pass@localhost:5432/mmakve_dev
JWT_SECRET=change_me_in_prod
JWT_EXPIRES_IN=2h
PORT=4000
```

---

## 📦 Scripts (backend)

| Script     | Description                    |
| ---------- | ------------------------------ |
| dev        | Démarrage en watch (tsx)       |
| build      | Compilation TypeScript -> dist |
| start      | Lance build compilé            |
| generate   | Génère client Prisma           |
| migrate    | Migration dev Prisma           |
| studio     | Prisma Studio (UI BDD)         |
| test       | Lance la suite de tests        |
| test:watch | Mode watch Vitest              |

---

## 🆘 Troubleshooting

| Problème                   | Piste                                                              |
| -------------------------- | ------------------------------------------------------------------ |
| `Error: P1001`             | DB non démarrée -> lancer docker compose db                        |
| `Invalid or expired token` | Revérifier header `Authorization: Bearer <token>`                  |
| Migration refuse           | Supprimer dossier `prisma/migrations` (uniquement en dev) et reset |

---

## 🗂 Prisma Studio (UI BDD)

```bash
docker compose -f docker-compose.dev.yml up -d db
pnpm --filter @mmakve/backend run studio
```

Ouvre une interface graphique pour naviguer/modifier les données.

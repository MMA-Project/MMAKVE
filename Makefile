.PHONY: help install setup dev start stop clean build test lint format docker-up docker-down docker-logs prisma-generate prisma-migrate prisma-studio prisma-reset

# Variables
PNPM := pnpm
DOCKER_COMPOSE := docker-compose -f docker-compose.dev.yml
BACKEND_DIR := apps/backend

# Couleurs pour les messages
GREEN := \033[0;32m
YELLOW := \033[0;33m
RED := \033[0;31m
NC := \033[0m # No Color

help: ## Affiche l'aide
	@echo "$(GREEN)MMAKVE - Commandes disponibles$(NC)"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "  $(YELLOW)%-20s$(NC) %s\n", $$1, $$2}'

# =======================
# Installation & Setup
# =======================

install: ## Install all dependencies
	@echo "$(GREEN)📦 Installation des dépendances...$(NC)"
	$(PNPM) install

setup: install docker-up prisma-migrate prisma-generate ## Setup complet du projet (install + docker + prisma)
	@echo "$(GREEN)✅ Setup terminé!$(NC)"
	@echo "$(YELLOW)Vous pouvez maintenant lancer: make dev$(NC)"

init: setup ## Alias pour setup

# =======================
# Docker
# =======================

docker-up: ## Démarre les containers Docker (base de données)
	@echo "$(GREEN)🐳 Démarrage des containers Docker...$(NC)"
	$(DOCKER_COMPOSE) up -d
	@echo "$(GREEN)⏳ Attente que la base de données soit prête...$(NC)"
	@until docker exec mmakve_db_dev pg_isready -U mmakve -d mmakve_dev > /dev/null 2>&1; do \
		sleep 1; \
	done
	@echo "$(GREEN)✅ Base de données prête!$(NC)"

docker-down: ## Arrête les containers Docker
	@echo "$(YELLOW)🛑 Arrêt des containers Docker...$(NC)"
	$(DOCKER_COMPOSE) down

docker-logs: ## Affiche les logs Docker
	$(DOCKER_COMPOSE) logs -f

docker-clean: docker-down ## Supprime les containers et volumes Docker
	@echo "$(RED)🗑️  Suppression des volumes Docker...$(NC)"
	$(DOCKER_COMPOSE) down -v
	@docker volume rm mmakve_db_data 2>/dev/null || true

# =======================
# Development
# =======================

dev: ## Lance le projet en mode développement
	@echo "$(GREEN)🚀 Démarrage en mode développement...$(NC)"
	$(PNPM) dev

start: ## Lance le projet en mode production
	@echo "$(GREEN)🚀 Démarrage en mode production...$(NC)"
	$(PNPM) start

stop: ## Arrête tous les processus
	@echo "$(YELLOW)🛑 Arrêt des processus...$(NC)"
	@pkill -f "tsx watch" || true
	@pkill -f "vite" || true

# =======================
# Build
# =======================

build: ## Build le projet
	@echo "$(GREEN)🔨 Build du projet...$(NC)"
	$(PNPM) build

clean: ## Nettoie les fichiers de build
	@echo "$(YELLOW)🧹 Nettoyage...$(NC)"
	@rm -rf apps/*/dist
	@rm -rf apps/*/node_modules
	@rm -rf packages/*/dist
	@rm -rf packages/*/node_modules
	@rm -rf node_modules
	@echo "$(GREEN)✅ Nettoyage terminé$(NC)"

# =======================
# Tests & Quality
# =======================

test: ## Lance les tests
	@echo "$(GREEN)🧪 Lancement des tests...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) test

test-watch: ## Lance les tests en mode watch
	@echo "$(GREEN)🧪 Lancement des tests en mode watch...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) test:watch

lint: ## Vérifie le code avec ESLint
	@echo "$(GREEN)🔍 Vérification du code...$(NC)"
	$(PNPM) lint

format: ## Formate le code avec Prettier
	@echo "$(GREEN)✨ Formatage du code...$(NC)"
	$(PNPM) format

format-check: ## Vérifie le formatage sans modifier
	@echo "$(GREEN)🔍 Vérification du formatage...$(NC)"
	$(PNPM) format:check

# =======================
# Prisma
# =======================

prisma-generate: ## Génère le client Prisma
	@echo "$(GREEN)⚙️  Génération du client Prisma...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma generate

prisma-migrate: ## Crée et applique une migration Prisma
	@echo "$(GREEN)🗄️  Application des migrations Prisma...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma migrate dev

prisma-migrate-deploy: ## Applique les migrations en production
	@echo "$(GREEN)🗄️  Déploiement des migrations Prisma...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma migrate deploy

prisma-studio: ## Ouvre Prisma Studio
	@echo "$(GREEN)🎨 Ouverture de Prisma Studio...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma studio

prisma-reset: ## Réinitialise la base de données
	@echo "$(RED)⚠️  Réinitialisation de la base de données...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma migrate reset --force

prisma-push: ## Push le schéma Prisma sans créer de migration
	@echo "$(GREEN)📤 Push du schéma Prisma...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma db push

prisma-seed: ## Seed la base de données
	@echo "$(GREEN)🌱 Seed de la base de données...$(NC)"
	cd $(BACKEND_DIR) && $(PNPM) prisma db seed

# =======================
# Raccourcis utiles
# =======================

reset: docker-clean setup ## Reset complet du projet (⚠️ supprime les données)
	@echo "$(GREEN)✅ Reset complet terminé!$(NC)"

restart: stop docker-down docker-up dev ## Redémarre tout le projet

logs: docker-logs ## Alias pour docker-logs

db: prisma-studio ## Alias pour prisma-studio

# Par défaut, affiche l'aide
.DEFAULT_GOAL := help

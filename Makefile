SHELL := /bin/sh

.PHONY: install dev build test test-backend test-frontend test-e2e coverage lint format docker-up docker-down docker-logs db-reset db-migrate down logs

install:
	npm install

dev:
	docker compose -f docker-compose.dev.yml up --build

build:
	npm run build

test:
	npm run test

test-backend:
	npm run test -w backend

test-frontend:
	npm run test -w frontend

test-e2e:
	npm run test:e2e -w frontend

coverage:
	npm run coverage

lint:
	npm run lint

format:
	npm run format

docker-up:
	docker compose -f docker-compose.dev.yml up --build -d

docker-down:
	docker compose -f docker-compose.dev.yml down

docker-logs:
	docker compose -f docker-compose.dev.yml logs -f

db-reset:
	docker compose -f docker-compose.dev.yml down -v
	docker compose -f docker-compose.dev.yml up --build -d postgres

db-migrate:
	@echo "No migration tool configured yet. Add one before using db-migrate."

down: docker-down

logs: docker-logs


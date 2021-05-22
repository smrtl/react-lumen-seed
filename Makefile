PHP_SRC_DIR=www/private

.PHONY: help
help:  ## this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: start-services
start-services:  ## Starts the local development services (MySQL, Apache2/PHP, phpMyAdmin)
	@docker compose up -d

.PHONY: stop-services
stop-services:  ## Stops the local development services (MySQL, Apache2/PHP, phpMyAdmin)
	@docker compose down

.PHONY: migrate
migrate:  ## Migrate the database
	@DB_HOST=127.0.0.1 $(PHP_SRC_DIR)/artisan migrate

.PHONY: migrate-fresh
migrate-fresh:  ## Drop all tables and re-run all migrations
	@DB_HOST=127.0.0.1 $(PHP_SRC_DIR)/artisan migrate:fresh

.PHONY: seed
seed:  ## Seed the database with records
	@DB_HOST=127.0.0.1 $(PHP_SRC_DIR)/artisan db:seed

.PHONY: seed-fresh
seed-fresh: migrate-fresh seed  ## Drop all tables, run migrations and seed the database with records

.PHONY: start
start:  ## Start the frontend development server
	@npm start

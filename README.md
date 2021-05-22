# React Single Page App with PHP Backend Seed project

Using [React](https://reactjs.org/) for the frontend app and [Lumen](https://lumen.laravel.com/) to
build a simple Rest API backend.

This seed project is targeting shared hosting running Apache 2, PHP 7.x and MySQL (ie. where it's
typically impossible to run commands, put things outside of the web root, etc...). So all the PHP
lies in the `www` directory with some `.htaccess` to avoid important files to be directly accessed.
This not great but not terrible and it does the job :)

This project features a `users` table with a very simple admin flag to demonstrate authenticated
routes and proto-role checking.

## Requirements

- docker
- npm
- composer
- [PHPUnit](https://phpunit.de/)

## Local development

**From the `www/private` folder:**

Install composer dependencies:

```
composer install
```

Generate a JWT-Auth secret:

```
./artisan jwt:secret
```

Migrate the database:

```
DB_HOST=127.0.0.1 ./artisan db:wipe
```

Run unit tests:

```
phpunit
```

**From the root folder:**

Start the local MySQL database and Apache/PHP server :

```
docker compose up
```

Start the frontend in development mode:

```
npm start
```

**Alternatively:**

Many of the development tasks are conveniently automatised in a `Makefile`. You can get a list of
those by typing:

```
make help
```

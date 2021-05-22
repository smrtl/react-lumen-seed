<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

// Public routes
$router->get('/', 'AuthController@whoami');
$router->post('register', 'AuthController@register');
$router->post('login', 'AuthController@login');

// Authenticated routes
$router->group(['middleware' => 'auth'], function () use ($router) {
    $router->get('profile', 'UserController@profile');
});

// Admin routes
$router->group(['prefix' => 'admin', 'middleware' => 'auth:admin'], function () use ($router) {
    $router->get('users/{id}', 'UserController@user');
    $router->get('users', 'UserController@allUsers');
});

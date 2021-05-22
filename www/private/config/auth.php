<?php

return [
    'defaults' => [
        // The default guard is "api"
        'guard' => 'api',
        'passwords' => 'users',
    ],

    'guards' => [
        // The "api" guard uses jwt
        'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],

    'providers' => [
        'users' => [
            'driver' => 'eloquent',
            'model' => \App\Models\User::class
        ]
    ]
];

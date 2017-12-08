<?php

use Faker\Generator as Faker;

$factory->define(App\Post::class, function (Faker $faker) {
    return [
        'title'   => $faker->title(10),
        'body'    => $faker->realText(200),
        'user_id' => factory(\App\User::class)->create()->id
    ];
});

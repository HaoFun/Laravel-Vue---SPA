<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Laravel\Passport\Passport;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        Passport::routes();

        //Expiretoken 60分鐘過期
        Passport::tokensExpireIn(Carbon::now()->addMinutes(60));

        //待Expiretoken 過期後，會帶refreshToken 更新Expiretoken
        //refreshToken 15天過期，過期後就必須重新登入了
        Passport::refreshTokensExpireIn(Carbon::now()->addDays(15));
    }
}

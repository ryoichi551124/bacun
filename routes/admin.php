<?php

use App\Http\Controllers\Admin\Auth\AuthenticatedSessionController;
use App\Http\Controllers\Admin\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Admin\Auth\EmailVerificationNotificationController;
use App\Http\Controllers\Admin\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Admin\Auth\NewPasswordController;
use App\Http\Controllers\Admin\Auth\PasswordController;
use App\Http\Controllers\Admin\Auth\PasswordResetLinkController;
use App\Http\Controllers\Admin\Auth\RegisteredUserController;
use App\Http\Controllers\Admin\Auth\VerifyEmailController;
use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\Admin;
use App\Http\Controllers\Admin\Basic;
use App\Http\Controllers\Admin\Category;
use App\Http\Controllers\Admin\Dashboard;
use App\Http\Controllers\Admin\MailTemplate;
use App\Http\Controllers\Admin\Order;
use App\Http\Controllers\Admin\Product;
use App\Http\Controllers\Admin\Shipping;
use App\Http\Controllers\Admin\Delivery;
use App\Http\Controllers\Admin\User;
use App\Http\Controllers\Admin\Api;

Route::middleware('guest:admin')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
        ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
        ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
        ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
        ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
        ->name('password.store');
});

Route::middleware('auth:admin')->group(function () {
    Route::get('verify-email', EmailVerificationPromptController::class)
        ->name('verification.notice');

    Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
        ->middleware(['signed', 'throttle:6,1'])
        ->name('verification.verify');

    Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
        ->middleware('throttle:6,1')
        ->name('verification.send');

    Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
        ->name('password.confirm');

    Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('dashboard')->name('dashboard')->group(function () {
        Route::get('/', Dashboard\IndexController::class);
    });

    // 受注管理
    Route::prefix('order')->name('order.')->group(function () {
        Route::get('/list', Order\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', Order\List\DeleteController::class)
            ->name('list.delete');
        Route::get('/create', Order\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', Order\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', Order\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', Order\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // 商品管理
    Route::prefix('product')->name('product.')->group(function () {
        Route::get('/list', Product\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', Product\List\DeleteController::class)
            ->name('list.delete');
        Route::get('/create', Product\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', Product\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', Product\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', Product\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // カテゴリー管理
    Route::prefix('category')->name('category.')->group(function () {
        Route::get('/list', Category\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', Category\List\DeleteController::class)
            ->name('list.delete');
        Route::post('/create/create', Category\Create\CreateController::class)
            ->name('create.create');
        Route::put('/edit/update/{id}', Category\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // 配送管理
    Route::prefix('shipping')->name('shipping.')->group(function () {
        Route::get('/list', Shipping\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', Shipping\List\DeleteController::class)
            ->name('list.delete');
        Route::get('/create', Shipping\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', Shipping\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', Shipping\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', Shipping\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // 送料管理
    Route::prefix('delivery')->name('delivery.')->group(function () {
        Route::get('/list', Delivery\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', Delivery\List\DeleteController::class)
            ->name('list.delete');
        Route::get('/create', Delivery\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', Delivery\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', Delivery\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', Delivery\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // メール管理
    Route::prefix('mailtemplate')->name('mailtemplate.')->group(function () {
        Route::get('/list', MailTemplate\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', MailTemplate\List\DeleteController::class)
            ->name('/list.delete');
        Route::get('/create', MailTemplate\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', MailTemplate\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', MailTemplate\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', MailTemplate\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // 顧客管理
    Route::prefix('user')->name('user.')->group(function () {
        Route::get('/list', User\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', User\List\DeleteController::class)
            ->name('list.delete');
        Route::get('/create', User\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', User\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', User\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', User\Edit\UpdateController::class)
            ->name('edit.update');
        Route::put('/edit/update/password/{id}', User\Edit\UpdatePasswordController::class)
            ->name('edit.update.password');
    });

    // 管理者設定
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::get('/list', Admin\List\IndexController::class)
            ->name('list');
        Route::delete('/list/delete/{id}', Admin\List\DeleteController::class)
            ->name('list.delete');
        Route::get('/create', Admin\Create\IndexController::class)
            ->name('create');
        Route::post('/create/create', Admin\Create\CreateController::class)
            ->name('create.create');
        Route::get('/edit/{id}', Admin\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update/{id}', Admin\Edit\UpdateController::class)
            ->name('edit.update');
        Route::put('/edit/update/password/{id}', Admin\Edit\UpdatePasswordController::class)
            ->name('edit.update.password');
    });

    // 基本情報
    Route::prefix('basic')->name('basic.')->group(function () {
        Route::get('/edit', Basic\Edit\IndexController::class)
            ->name('edit');
        Route::put('/edit/update', Basic\Edit\UpdateController::class)
            ->name('edit.update');
    });

    // API
    Route::prefix('api')->name('api.')->group(function () {
        Route::prefix('user')->group(function () {
            Route::post('/search', Api\User\SearchController::class);
        });
        Route::prefix('product')->group(function () {
            Route::post('/search', Api\Product\SearchController::class);
        });
    });
});

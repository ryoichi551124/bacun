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
use App\Http\Controllers\Admin\Mail;
use App\Http\Controllers\Admin\Order;
use App\Http\Controllers\Admin\Product;
use App\Http\Controllers\Admin\Shipping;
use App\Http\Controllers\Admin\User;
use Inertia\Inertia;

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

    Route::prefix('order')->name('order')->group(function () {
        Route::get('/', Order\List\IndexController::class);
    });

    Route::prefix('product')->name('product')->group(function () {
        Route::get('/', Product\List\IndexController::class);
    });

    Route::prefix('category')->name('category')->group(function () {
        Route::get('/', Category\List\IndexController::class);
    });

    Route::prefix('shipping')->name('shipping')->group(function () {
        Route::get('/', Shipping\IndexController::class);
    });

    Route::prefix('mail')->name('mail')->group(function () {
        Route::get('/', Mail\IndexController::class);
    });

    Route::prefix('user')->name('user')->group(function () {
        Route::get('/', User\List\IndexController::class);
    });

    Route::prefix('admin')->name('admin')->group(function () {
        Route::get('/', Admin\List\IndexController::class);
    });

    Route::prefix('basic')->name('basic')->group(function () {
        Route::get('/', Basic\List\IndexController::class);
    });
});

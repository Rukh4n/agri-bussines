<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    // CATEGORY
    Route::get('category/create', [CategoryController::class, 'create', 'index']);
    Route::post('category/post', [CategoryController::class, 'store']);
    // ARTICLE
    Route::get('article', [ArticleController::class, 'index']);
    Route::get('article/create', [ArticleController::class, 'create']);
    Route::post('article/post', [ArticleController::class, 'store']);
});

// EMAIL NOTIFICATION
Route::get('/email/verify', function () {
    return Inertia::render('VerifyEmail');
})->middleware('auth')->name('verification.notice');
// HENDLE VERIFY EMAIL
Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/login');
})->middleware(['auth', 'signed'])->name('verification.verify');
// RESENDING EMAIL VERIFICATION
Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');



require __DIR__ . '/auth.php';

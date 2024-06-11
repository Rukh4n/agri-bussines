<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/about', function () {
    return Inertia::render('Profile');
});

Route::get('/dashboard',[PostController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/upload-article', [PostController::class, 'create']);
    Route::post('/upload-article-upload', [PostController::class, 'store']);
    Route::get('/article/{slug}', [PostController::class, 'show']);
    Route::get('/edit-article/{slug}', [PostController::class, 'edit']);
    Route::put('/edit/article/{slug}', [PostController::class, 'update']);
    Route::delete('/article/{slug}', [PostController::class, 'destroy']);
});

require __DIR__ . '/auth.php';

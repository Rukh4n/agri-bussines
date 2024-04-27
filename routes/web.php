<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Models\Article;
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

Route::get('/blog', [ArticleController::class, 'listArticles']);
Route::get('/blog/{slug}', [ArticleController::class, 'show']);
// Category
Route::get('/blog_kategori', [CategoryController::class, 'listCategories']);
Route::get('/blog_kategori/{slug}', [CategoryController::class, 'show']);


Route::get('/dashboard', function () {
    $new_articles = Article::orderBy('created_at')->get();
    return Inertia::render('Dashboard', [
        'new_articles' => $new_articles,
    ]);
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
    Route::get('article/edit/{slug}', [ArticleController::class, 'edit']);
    Route::patch('article/update/{slug}', [ArticleController::class, 'update']);
    Route::delete('article/destroy/{slug}', [ArticleController::class, 'destroy']);
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

<?php

namespace App\Http\Controllers;

use DB;
use Inertia\Inertia;
use App\Models\Article;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\StoreArticleRequest;
use App\Http\Requests\UpdateArticleRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();

        return Inertia::render('Article/Article', [
            'articles' => $articles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();
        return Inertia::render('Article/CreateArticle', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {

        $user_id = auth()->user()->id;

        // $slug = Str::slug($request->title, '-') . '-' . uniqid();

        $article = Article::create([
            'user_id' => $user_id,
            'title' => $request->title,
            'slug' => $request->slug,
            'category_id' => $request->category_id,
            'description' => $request->description,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();

        return Inertia::render('Article/userArticle', [
            'article' => $article,
        ]);
    }

    public function listArticles()
    {
        $articles = Article::orderBy('created_at', 'desc')->get();
        $categories = Category::orderBy('created_at', 'desc')->get();

        return Inertia::render('Article/userArticles', [
            'categories' => $categories,
            'articles' => $articles
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        $categories = Category::all();
        $currentToken = session()->token();

        return Inertia::render('Article/EditArticle', [
            'article' => $article,
            'categories' => $categories,
            'token' => $currentToken,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, $slug)
    {
        $user_id = auth()->user()->id;
        dd($request->all());
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        $article->delete();

        // return redirect()->route('article')->with('success', 'Artikel berhasil dihapus.');
    }
}

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
        if (!$request->hasFile('image')) {
            return redirect()->back()->with('error', 'Anda harus mengunggah gambar.');
        }

        $image = $request->file('image');
        $fileName = date('YmdHis') . uniqid() . '.' . $image->getClientOriginalExtension();
        $filePath = $image->storeAs('public/articles', $fileName);

        $user_id = auth()->user()->id;

        $slug = Str::slug($request->title, '-') . '-' . uniqid();

        $article = Article::create([
            'user_id' => $user_id,
            'title' => $request->title,
            'slug' => $slug,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'image' => $filePath,
        ]);

        if ($article) {
            return redirect()->route('articles.index')->with('success', 'Artikel berhasil disimpan.');
        } else {
            return redirect()->back()->with('error', 'Gagal menyimpan artikel.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        $article = Article::where('slug', $slug)->firstOrFail();
        $categories = Category::all();
        return Inertia::render('Article/EditArticle', [
            'article' => $article,
            'categories' => $categories,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateArticleRequest $request, $slug)
    {
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

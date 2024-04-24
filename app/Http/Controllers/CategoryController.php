<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Article;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();
        return Inertia::render('Category/CreateCategory', [
            'categories' => $categories,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create([
            'name' => $request->name,
            'slug' => $request->slug,
        ]);


        // return response()->json([
        //     'message' => 'Data berhasil disimpan (Data saved successfully)', // Indonesian success message
        //     'data' => $category,
        // ], 201);
    }
    public function listCategories()
    {
        $categories = Category::orderBy('created_at', 'desc')->get();
        return Inertia::render('Category/userCategories', [
            'categories' => $categories,
        ]);
    }


    /**
     * Display the specified resource.
     */



    public function show($slug)
    {

        // Mengambil kategori berdasarkan slug
        $category = Category::where('slug', $slug)->firstOrFail();

        $category_id = $category->id;
        $articles = Article::where('category_id', $category_id)->get();
        // dd($articles);
        
        return Inertia::render('Category/userCategory', [
            'category' => $category,
            'articles' => $articles,
        ]);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Mengambil semua kategori dari database
        $categories = Category::all();

        // Menampilkan halaman Admin/UploadArticle dengan data kategori
        return Inertia::render('Admin/UploadArticle', [
            'categories' => $categories
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // Implementasikan jika diperlukan form untuk membuat kategori baru
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCategoryRequest $request)
    {
        // Validasi input dari request
        $name = $request->name;
        
        // Ambil nama kategori baru dari input
        $category_name = $name;

        // Generate slug dari category_name dan tambahkan timestamp
        $slug = Str::slug($category_name) . '-' . Carbon::now()->format('YmdHis');

        // Simpan kategori baru ke dalam database
        $category = new Category();
        $category->category_name = $category_name;
        $category->slug = $slug;
        $category->save();

        // Redirect dengan pesan sukses
        return redirect()->back()->with('success', 'Category successfully created!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        // Implementasikan jika Anda ingin menampilkan kategori tertentu
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        // Implementasikan jika Anda ingin mengedit kategori
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCategoryRequest $request, Category $category)
    {
        // Implementasikan logika update kategori
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        // Implementasikan logika untuk menghapus kategori
    }
}

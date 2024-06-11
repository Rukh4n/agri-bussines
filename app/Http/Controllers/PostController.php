<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Inertia\Inertia;
use Illuminate\Support\Str;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::paginate(10);
        return Inertia::render('Dashboard', [
            'posts' => $posts,
        ]);
    }

    // New News to guest layout
    public function newNews(Request $request)
    {
        $latestPosts = Post::latest()->take(8)->get();

        return response()->json([
            'newNews' => $latestPosts,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $user = auth()->user();
        return Inertia::render('Admin/UploadArticle', [
            'user' => $user,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StorePostRequest $request)
    {
        $slug = Str::slug($request->title) . '-' . now()->format('YmdHis');
        $post = new Post();
        $post->title = $request->title;
        $post->slug = $slug;
        $post->description = $request->description;
        $post->save();

        // Redirect ke dashboard
        return redirect()->route('dashboard')->with('success', 'Data berhasil disimpan!');
    }


    /**
     * Display the specified resource.
     */
    public function show($slug)
    {
        $post = Post::where('slug', $slug)->first();
        return Inertia::render('Guest/DetailPost', [
            'post' => $post,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($slug)
    {
        // Mengambil data post berdasarkan slug
        $post = Post::where('slug', $slug)->first();

        // Render halaman edit dengan data post
        return Inertia::render('Admin/EditPost', [
            'post' => $post,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdatePostRequest $request, $slug)
    {

        $post = Post::where('slug', $slug)->firstOrFail();

        $title = $request->title;
        $slug = Str::slug($title) . '-' . now()->format('YmdHis');
        $description = $request->description;

        $post->update([
            'title' => $title,
            'slug' => $slug,
            'content' => $description,
        ]);

        // Redirect ke halaman dashboard setelah data berhasil di update
        return redirect('/dashboard')
            ->with('success', 'Data berhasil diperbarui!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($slug)
    {
        $postToDelete = Post::where('slug', $slug)->first();

        // if (!$postToDelete) {
        //     return response()->json(['message' => 'Post tidak ditemukan'], 404);
        // }

        $postToDelete->delete();

        return redirect('/dashboard');
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $filleble = [
        'title', 'slug', 'description', 'category_id',
    ];

    public function categories() 
    {
        return $this->belongsTo(Category::class);
    }
}

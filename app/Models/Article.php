<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Article extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    
    protected $fileble = [
        'user_id',
        'title',
        'description',
        'category_id',
    ];
    // RELATED TO TABLE CATEGORY
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'foreign_key');
    }

    // RELATED TO TABLE USER
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class, 'foreign_key');
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class Question extends Model
{
    protected $fillable = [
        'content',
        'alternativeA',
        'alternativeB',
        'alternativeC',
        'alternativeD',
        'alternativeE',
        'subject_id',
        'tags',
        'correctAlternative',
    ];

    public function owner()
    {
        return $this->belongsToMany(User::class)
            ->wherePivot('relation', 'owner')
            ->wherePivot('question_id', $this->id);
    }

    public function bookmarks()
    {
        return $this->hasMany(User::class)->wherePivot('relation', 'bookmark');
    }

    public function subject()
    {
        return $this->belongsTo(Subject::class);
    }

    public function answers()
    {
        return $this->hasMany(User::class);
    }

    public function users()
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * Get The currently Authenticated user's relations with this question.
     *
     *
     */

    public function relations()
    {
        return $this->belongsToMany(User::class)
            ->withPivot('relation')
            ->wherePivot('user_id', Auth::id());
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

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
        'user_id',
        'tags',
        'correctAlternative'
    ];
}

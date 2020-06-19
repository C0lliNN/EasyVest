<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class QuestionList extends Model {
    protected $fillable = ['title', 'description', 'tags', 'subject_id'];
    protected $table = 'lists';
    protected $primaryKey = 'id';

    public function owner() {
        return $this->belongsToMany(
            User::class,
            'list_user',
            'list_id',
            'user_id'
        )
            ->wherePivot('relation', 'owner')
            ->wherePivot('list_id', $this->id);
    }

    public function users() {
        return $this->belongsToMany(
            User::class,
            'list_user',
            'list_id',
            'user_id'
        );
    }

    public function questions() {
        return $this->belongsToMany(
            Question::class,
            'list_question',
            'list_id'
        );
    }

    public function subject() {
        return $this->belongsTo(Subject::class);
    }

    public function relations() {
        return $this->belongsToMany(
            User::class,
            'list_user',
            'list_id',
            'user_id'
        )
            ->withPivot('relation')
            ->wherePivot('user_id', Auth::id());
    }
}

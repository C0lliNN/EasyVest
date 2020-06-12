<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class User extends Authenticatable {
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password', 'api_token'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime'
    ];

    public function myQuestions() {
        return $this->belongsToMany(Question::class)->wherePivot(
            'relation',
            'owner'
        );
    }

    public function bookmarks() {
        return $this->belongsToMany(Question::class)->wherePivot(
            'relation',
            'bookmark'
        );
    }

    public function answers() {
        return $this->belongsToMany(Question::class)->wherePivot(
            'relation',
            'answer'
        );
    }

    public function deleteProfilePicture() {
        if ($this->image) {
            Storage::delete(Str::substr($this->image, 8));
        }
    }
}

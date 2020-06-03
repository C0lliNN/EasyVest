<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Subject extends Model
{
    protected $fillable = ['name'];

    public function questions() {
        return $this->hasMany(Question::class);
    }
}

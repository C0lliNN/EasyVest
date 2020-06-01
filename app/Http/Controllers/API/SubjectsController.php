<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\SubjectCollection;
use App\Subject;

class SubjectsController extends Controller
{
    public function index() {
        return new SubjectCollection(Subject::all());

    }
}

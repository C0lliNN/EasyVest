<?php

use App\Subject;
use Illuminate\Database\Seeder;

class SubjectsTableSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        Subject::create([
            'name' => 'Português'
        ]);
        Subject::create([
            'name' => 'Literatura'
        ]);
        Subject::create([
            'name' => 'Inglês'
        ]);
        Subject::create([
            'name' => 'História'
        ]);
        Subject::create([
            'name' => 'Geografia'
        ]);
        Subject::create([
            'name' => 'Sociologia'
        ]);
        Subject::create([
            'name' => 'Filosofia'
        ]);
        Subject::create([
            'name' => 'Matemática'
        ]);
        Subject::create([
            'name' => 'Química'
        ]);
        Subject::create([
            'name' => 'Física'
        ]);
        Subject::create([
            'name' => 'Biologia'
        ]);
    }
}

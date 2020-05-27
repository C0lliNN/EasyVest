<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'Raphael Collin',
            'email' => 'raphael@test.com',
            'password' => Hash::make('997967420')
        ]);
        User::create([
            'name' => 'Philippe Olivier',
            'email' => 'phillippe@test.com',
            'password' => Hash::make('997967420')
        ]);
    }
}

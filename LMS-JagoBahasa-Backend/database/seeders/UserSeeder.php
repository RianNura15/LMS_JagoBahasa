<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Rian Nura Ari Sucipto',
            'email' => 'rian@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'Teacher',
            'token' => Str::random(60),
        ]);
        
        User::create([
            'name' => 'Fitri Anisabila',
            'email' => 'fitri@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'Teacher',
            'token' => Str::random(60),
        ]);
        
        User::create([
            'name' => 'Muhammad Andi',
            'email' => 'andi@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'Teacher',
            'token' => Str::random(60),
        ]);
        
        User::create([
            'name' => 'Lukman Hakim',
            'email' => 'lukman@gmail.com',
            'password' => Hash::make('password'),
            'role' => 'Member',
            'token' => Str::random(60),
        ]);
    }
}

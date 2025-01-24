<?php

namespace Database\Seeders;

use App\Models\Program;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProgramSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Program::create([
            'title' => 'Reguler',
            'description' => 'Belajar dan berdiskusi secara intensif bareng kelompok kecil (5 - 9 orang). Kamu akan bereksplorasi bersama teman baru dan tutor yang seru.',
        ]);
        Program::create([
            'title' => 'Private',
            'description' => 'Program belajar yang cocok buat kamu meningkatkan skill tanpa distraksi. Kamu bebas pilih jam dan materi',
        ]);
        Program::create([
            'title' => 'Private Weekend',
            'description' => 'Kelas privat yang didesain secara khusus untuk kamu yang ingin belajar di akhir pekan, tanpa perlu mengganggu aktivitas harian.',
        ]);
    }
}

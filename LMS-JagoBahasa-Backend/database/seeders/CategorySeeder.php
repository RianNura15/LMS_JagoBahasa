<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'title' => 'Jago Speaking',
            'description' => 'Program kursus bahasa Inggris online ini dirancang khusus buat kamu yang ingin meningkatkan kemampuan speaking secara lancar, baik buat kepentingan akademik, karir, maupun topik sehari-hari. Kamu bisa memilih kelas secara reguler atau privat dengan memperdalam grammar, vocab, dan pronunciation.',
        ]);
        Category::create([
            'title' => 'English for Kids',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
        ]);
        Category::create([
            'title' => 'English Whizz Kids',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
        ]);
        Category::create([
            'title' => 'English for Specific Purpose',
            'description' => 'Kamu bisa belajar bahasa Inggris online secara spesifik pada skill yang ingin ditingkatkan dengan kelas English for Spesific Purpose. Mulai dari keperluan akademik sampai profesional, seperti persiapan beasiswa, bidang perkantoran, job interview, dan lain sebagainya yang bisa disesuaikan dengan kebutuhan belajarmu.',
        ]);
    }
}

<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Course::create([
            'title' => 'Course 1',
            'description' => 'Program kursus bahasa Inggris online ini dirancang khusus buat kamu yang ingin meningkatkan kemampuan speaking secara lancar, baik buat kepentingan akademik, karir, maupun topik sehari-hari. Kamu bisa memilih kelas secara reguler atau privat dengan memperdalam grammar, vocab, dan pronunciation.',
            'price' => 325000,
            'level' => 'Intermediate',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 1,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 2',
            'description' => 'Program kursus bahasa Inggris online ini dirancang khusus buat kamu yang ingin meningkatkan kemampuan speaking secara lancar, baik buat kepentingan akademik, karir, maupun topik sehari-hari. Kamu bisa memilih kelas secara reguler atau privat dengan memperdalam grammar, vocab, dan pronunciation.',
            'price' => 959000,
            'level' => 'Advance',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 1,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 3',
            'description' => 'Program kursus bahasa Inggris online ini dirancang khusus buat kamu yang ingin meningkatkan kemampuan speaking secara lancar, baik buat kepentingan akademik, karir, maupun topik sehari-hari. Kamu bisa memilih kelas secara reguler atau privat dengan memperdalam grammar, vocab, dan pronunciation.',
            'price' => 1069000,
            'level' => 'Advance',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 1,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 4',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 325000,
            'level' => 'Beginner',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 2,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 5',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 325000,
            'level' => 'Beginner',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 2,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 6',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 959000,
            'level' => 'Beginner',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 2,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 7',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 1069000,
            'level' => 'Beginner',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 2,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 8',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 325000,
            'level' => 'Flyer',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 2,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 9',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 959000,
            'level' => 'Flyer',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 2,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 10',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 1069000,
            'level' => 'Flyer',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 2,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 11',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 325000,
            'level' => 'Champion',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 2,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 12',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 959000,
            'level' => 'Champion',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 2,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 13',
            'description' => 'Program belajar bahasa inggris online yang didesain secara khusus membantu anak-anak mengenal dan mahir berbahasa Inggris sejak dini. Metode belajar dikemas secara fun dan interaktif buat mendorong praktik speaking anak. Kelas ini dikelompokkan berdasarkan level usia anak mulai dari 6 sampai 14 tahun.',
            'price' => 1069000,
            'level' => 'Champion',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 2,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 14',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 325000,
            'level' => '1st Month',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 3,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 15',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 959000,
            'level' => '1st Month',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 3,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 16',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 1069000,
            'level' => '1st Month',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 3,
            'instructor_id' => 1,
        ]);
        Course::create([
            'title' => 'Course 17',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 325000,
            'level' => '3rd Month',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 3,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 18',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 959000,
            'level' => '3rd Month',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 3,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 19',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 1069000,
            'level' => '3rd Month',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 3,
            'instructor_id' => 2,
        ]);
        Course::create([
            'title' => 'Course 20',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 325000,
            'level' => '6th Month',
            'thumbnail' => '',
            'program_id' => 1,
            'category_id' => 3,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 21',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 959000,
            'level' => '6th Month',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 3,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 22',
            'description' => 'Program belajar bahasa Inggris khusus anak usia 3 sampai 5 tahun yang masih mempelajari baca, tulis, dan hitung. English Whizz Kids berfokus memperkenalkan dan membiasakan bahasa Inggris pada anak usia dini melalui nyanyian, permainan, dan topik sehari-hari di lingkungan sekitar secara menyenangkan.',
            'price' => 1069000,
            'level' => '6th Month',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 3,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 23',
            'description' => 'Kamu bisa belajar bahasa Inggris online secara spesifik pada skill yang ingin ditingkatkan dengan kelas English for Spesific Purpose. Mulai dari keperluan akademik sampai profesional, seperti persiapan beasiswa, bidang perkantoran, job interview, dan lain sebagainya yang bisa disesuaikan dengan kebutuhan belajarmu.',
            'price' => 1069000,
            'level' => 'Advance',
            'thumbnail' => '',
            'program_id' => 2,
            'category_id' => 4,
            'instructor_id' => 3,
        ]);
        Course::create([
            'title' => 'Course 24',
            'description' => 'Kamu bisa belajar bahasa Inggris online secara spesifik pada skill yang ingin ditingkatkan dengan kelas English for Spesific Purpose. Mulai dari keperluan akademik sampai profesional, seperti persiapan beasiswa, bidang perkantoran, job interview, dan lain sebagainya yang bisa disesuaikan dengan kebutuhan belajarmu.',
            'price' => 1069000,
            'level' => 'Advance',
            'thumbnail' => '',
            'program_id' => 3,
            'category_id' => 4,
            'instructor_id' => 3,
        ]);
    }
}

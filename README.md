Tahapan Konfigurasi Pada Backend :
1. melakukan perintah pada bash / powershell composer install
2. melakukan perintah pada bash / powershell php artisan key:generate
3. melakukan perintah pada bash / powershell cp .env.example .env
4. mengubah DB_CONNECTION sampai DB_PASSWORD sesuai Database yang digunakan
5. melakukan perintah pada bash / powershell php artisan migrate --seed
6. melakukan perintah pada bash / powershell php artisan storage:link
7. jalankan pada browser dengan localhost:8000

Tahapan Konfigurasi Pada Frontend :
1. melakukan perintah pada bash / powershell npm install
2. melakukan perintah pada bash / powershell npm run dev

Alur Kerja Aplikasi :
1. melakukan login terlebih dahulu sebagai Pengajar
2. melihat daftar kursus sesuai yang di inputkan
3. menambah data kursus baru
4. melihat detail kursus
5. melihat detail kursus
6. menambah data materi baru

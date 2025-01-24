<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->integer('price');
            $table->string('level', 50);
            $table->string('thumbnail')->nullable();
            $table->foreignId('program_id', 50)->constrained('programs', 'id')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('category_id', 50)->constrained('categories', 'id')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('instructor_id', 50)->constrained('users', 'id')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};

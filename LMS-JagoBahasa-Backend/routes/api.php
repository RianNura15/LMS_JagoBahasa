<?php

use App\Http\Controllers\CategoryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\MaterialController;
use App\Http\Controllers\ProgramController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/get-data-course', [CourseController::class, 'getDataCourse']);
Route::get('/get-data-program', [ProgramController::class, 'getDataProgram']);
Route::get('/get-data-category', [CategoryController::class, 'getDataCategory']);

Route::post('login', [LoginController::class, 'login']);
Route::post('/logout', [LoginController::class, 'logout'])->middleware('auth:sanctum');
Route::middleware('auth:sanctum')->get('/course', [CourseController::class, 'getDataCourseInstructor']);
Route::middleware('auth:sanctum')->get('/course/{id}', [CourseController::class, 'getDetailDataCourse']);
Route::middleware('auth:sanctum')->post('/course', [CourseController::class, 'store']);
Route::middleware('auth:sanctum')->post('/material', [MaterialController::class, 'store']);
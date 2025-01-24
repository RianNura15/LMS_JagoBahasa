<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CourseController extends Controller
{
    public function getDataCourse()
    {
        $data = Course::with('users', 'categories', 'programs')->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data Fetched Successfully',
            'data' => $data,
        ], 200);
    }

    public function getDetailDataCourse(string $id)
    {
        $data = Course::with('users', 'categories', 'programs')->findOrFail($id);

        return response()->json([
            'status' => 'success',
            'message' => 'Data Fetched Successfully',
            'data' => $data,
        ], 200);
    }

    public function getDataCourseInstructor()
    {
        $data = Course::with('users', 'categories', 'programs')
                        ->where('courses.instructor_id', Auth::user()->id)
                        ->get();
        $idUser = Auth::user()->id;
        
        return response()->json([
            'status' => 'success',
            'message' => 'Data Fetched Successfully',
            'data' => $data,
            'user' => $idUser,
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric|min:0',
            'level' => 'required|string',
            'thumbnail' => 'nullable|image|mimes:jpeg,png,jpg',
            'program_id' => 'required|',
            'category_id' => 'required|',
            'instructor_id' => 'required|',
        ]);

        if ($request->hasFile('thumbnail')) {
            $validatedData['thumbnail'] = $request->file('thumbnail')->store('thumbnails', 'public');
        }

        $course = Course::create($validated);

        return response()->json([
            'status' => 'success',
            'message' => 'Kursus berhasil ditambahkan',
            'data' => $course,
        ], 201);
    }
}

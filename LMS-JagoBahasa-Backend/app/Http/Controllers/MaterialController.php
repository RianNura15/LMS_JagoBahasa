<?php

namespace App\Http\Controllers;

use App\Models\Material;
use Illuminate\Http\Request;

class MaterialController extends Controller
{
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'type' => 'required|in:file,link',
            'file_path' => 'required_if:type,file|nullable|string',
            'course_id' => 'required|exists:courses,id', // Pastikan course_id valid
        ]);

        $filePath = null;
        if ($request->type == 'file' && $request->hasFile('file_path')) {
            $file = $request->file('file_path');
            $filePath = $file->store('materials', 'public');
        } else if ($request->type == 'link') {
            $filePath = $request->file_path; // Simpan link langsung
        }

        $material = Material::create([
            'title' => $validatedData['title'],
            'type' => $validatedData['type'],
            'file_path' => $filePath,
            'course_id' => $validatedData['course_id'],
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Material created successfully',
            'data' => $material,
        ], 200);
    }
}

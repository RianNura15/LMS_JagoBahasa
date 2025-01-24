<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getDataCategory()
    {
        $data = Category::get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data Fetched Successfully',
            'data' => $data,
        ], 200);
    }
}

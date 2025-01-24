<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Illuminate\Http\Request;

class ProgramController extends Controller
{
    public function getDataProgram()
    {
        $data = Program::get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data Fetched Successfully',
            'data' => $data,
        ], 200);
    }
}

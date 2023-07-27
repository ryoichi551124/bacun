<?php

namespace App\Http\Controllers\Admin\Admin\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $admins = Admin::all();
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/List', [
            'admins' => $admins,
            'roles' => $roles,
        ]);
    }
}

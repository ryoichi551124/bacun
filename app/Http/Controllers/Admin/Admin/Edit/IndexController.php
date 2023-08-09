<?php

namespace App\Http\Controllers\Admin\Admin\Edit;

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
        $admin = Admin::Id($request->route('id'))->first();
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/Edit', [
            'admin' => $admin,
            'roles' => $roles,
        ]);
    }
}

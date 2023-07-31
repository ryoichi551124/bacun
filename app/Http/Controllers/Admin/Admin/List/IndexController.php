<?php

namespace App\Http\Controllers\Admin\Admin\List;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 管理者一覧
     */
    public function __invoke()
    {
        $admins = Admin::all();
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/List', [
            'admins' => $admins,
            'roles' => $roles,
        ]);
    }
}

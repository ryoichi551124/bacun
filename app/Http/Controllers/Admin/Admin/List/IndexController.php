<?php

namespace App\Http\Controllers\Admin\Admin\List;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 管理者一覧ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $admins = Admin::all();
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/List', [
            'admins' => $admins,
            'roles' => $roles,
        ]);
    }
}

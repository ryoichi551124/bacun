<?php

namespace App\Http\Controllers\Admin\Admin\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 管理者編集ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $admin = Admin::Id($request->route('id'))->first();
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/Edit', [
            'admin' => $admin,
            'roles' => $roles,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Admin\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 管理者登録
     */
    public function __invoke()
    {
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/Create', [
            'roles' => $roles,
        ]);
    }
}

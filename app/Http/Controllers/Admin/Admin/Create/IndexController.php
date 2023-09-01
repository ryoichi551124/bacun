<?php

namespace App\Http\Controllers\Admin\Admin\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 管理者作成ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $roles = config('admin.role');

        return Inertia::render('Admin/Admin/Create', [
            'roles' => $roles,
        ]);
    }
}

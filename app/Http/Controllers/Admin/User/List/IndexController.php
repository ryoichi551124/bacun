<?php

namespace App\Http\Controllers\Admin\User\List;

use App\Http\Controllers\Controller;
use App\Models\User;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 顧客一覧
     */
    public function __invoke()
    {
        $users = User::all();
        $statuses = config('user.status');

        return Inertia::render('Admin/User/List', [
            'users' => $users,
            'statuses' => $statuses,
        ]);
    }
}

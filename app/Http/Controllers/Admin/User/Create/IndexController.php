<?php

namespace App\Http\Controllers\Admin\User\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 顧客の新規作成ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $statuses = config('user.status');
        $prefs = config('pref');

        return Inertia::render('Admin/User/Create', [
            'statuses' => $statuses,
            'prefs' => $prefs,
        ]);
    }
}

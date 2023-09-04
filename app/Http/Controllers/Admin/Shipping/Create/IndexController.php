<?php

namespace App\Http\Controllers\Admin\Shipping\Create;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 配送情報の新規作成ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $prefs = config('pref');

        return Inertia::render('Admin/Shipping/Create', [
            'prefs' => $prefs,
        ]);
    }
}

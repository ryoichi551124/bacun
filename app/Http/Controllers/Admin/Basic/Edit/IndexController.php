<?php

namespace App\Http\Controllers\Admin\Basic\Edit;

use App\Http\Controllers\Controller;
use App\Models\Basic;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 基本情報設定ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $basic = Basic::Data()->first();

        return Inertia::render('Admin/Basic/Edit', ['basic' => $basic]);
    }
}

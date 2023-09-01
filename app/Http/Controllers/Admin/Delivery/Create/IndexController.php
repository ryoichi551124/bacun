<?php

namespace App\Http\Controllers\Admin\Delivery\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 送料新規作成ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        return Inertia::render('Admin/Delivery/Create');
    }
}

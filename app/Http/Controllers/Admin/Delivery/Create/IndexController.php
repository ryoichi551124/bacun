<?php

namespace App\Http\Controllers\Admin\Delivery\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 送料新規作成
     */
    public function __invoke()
    {
        return Inertia::render('Admin/Delivery/Create');
    }
}

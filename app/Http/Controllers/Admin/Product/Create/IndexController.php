<?php

namespace App\Http\Controllers\Admin\Product\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 商品新規作成
     */
    public function __invoke()
    {
        return Inertia::render('Admin/Product/Create');
    }
}

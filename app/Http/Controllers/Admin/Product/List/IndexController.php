<?php

namespace App\Http\Controllers\Admin\Product\List;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 商品一覧
     */
    public function __invoke()
    {
        $products = Product::all();

        return Inertia::render('Admin/Product/List', [
            'products' => $products,
        ]);
    }
}

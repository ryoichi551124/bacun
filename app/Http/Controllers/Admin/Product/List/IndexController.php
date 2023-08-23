<?php

namespace App\Http\Controllers\Admin\Product\List;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 商品一覧
     */
    public function __invoke()
    {
        $products = Product::all();
        $types = config('product.type');
        $statuses = config('product.status');

        return Inertia::render('Admin/Product/List', [
            'products' => $products,
            'types' => $types,
            'statuses' => $statuses,
        ]);
    }
}

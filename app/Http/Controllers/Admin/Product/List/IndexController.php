<?php

namespace App\Http\Controllers\Admin\Product\List;

use App\Http\Controllers\Controller;
use App\Models\Product;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 商品一覧ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $products = Product::all();
        $categories = Category::all();
        $types = config('product.type');
        $statuses = config('product.status');

        return Inertia::render('Admin/Product/List', [
            'products' => $products,
            'categories' => $categories,
            'types' => $types,
            'statuses' => $statuses,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Product\Create;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Delivery;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 商品新規作成
     */
    public function __invoke()
    {
        $categories = Category::all();
        $deliveries = Delivery::all();
        $types = config('product.type');
        $tags = config('product.tag');
        $statuses = config('product.status');

        return Inertia::render('Admin/Product/Create', [
            'categories' => $categories,
            'deliveries' => $deliveries,
            'types' => $types,
            'tags' => $tags,
            'statuses' => $statuses,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Product\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\Delivery;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 商品の編集ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $product = Product::Id($request->route('id'))->first();
        $categories = Category::all();
        $deliveries = Delivery::all();
        $types = config('product.type');
        $tags = config('product.tag');
        $statuses = config('product.status');

        return Inertia::render('Admin/Product/Edit', [
            'product' => $product,
            'categories' => $categories,
            'deliveries' => $deliveries,
            'types' => $types,
            'tags' => $tags,
            'statuses' => $statuses,
        ]);
    }
}

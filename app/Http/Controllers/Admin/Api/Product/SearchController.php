<?php

namespace App\Http\Controllers\Admin\Api\Product;

use App\Http\Controllers\Controller;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * カテゴリーIDによる商品検索
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request): JsonResponse
    {
        $products = [];
        if ($request->category_id) {
            $products = Product::CategoryId($request->category_id)->get();
        } else {
            $products = Product::all();
        }

        return response()->json($products, 200);
    }
}

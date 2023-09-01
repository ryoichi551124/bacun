<?php

namespace App\Http\Controllers\Admin\Product\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Http\RedirectResponse;

class DeleteController extends Controller
{
    /**
     * 商品の削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $product = Product::Id($request->route('id'))->first();
        $name = $product->name;
        $product->delete();

        return redirect()
            ->route('admin.product.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'の商品情報を削除しました',
            ]);
    }
}

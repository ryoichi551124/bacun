<?php

namespace App\Http\Controllers\Admin\Product\Create;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\CreateRequest;
use App\Models\Product;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
    {
        Product::create($request->validated());

        return redirect()
            ->route('admin.product.list')
            ->with([
                'severity' => 'success',
                'message' => '新規商品を登録しました',
            ]);
    }
}

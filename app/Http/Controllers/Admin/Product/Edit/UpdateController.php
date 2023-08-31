<?php

namespace App\Http\Controllers\Admin\Product\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Models\Product;
use App\Services\FileService;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateRequest $request)
    {
        $img_attributes = ['main_img', 'thumbnail', 'sub_img1', 'sub_img2', 'sub_img3'];
        $directory = 'product';

        $img_urls = [];
        foreach ($img_attributes as $attribute) {
            if (isset($request->validated()[$attribute]) && $request->validated()[$attribute]) {
                $img_url = FileService::store($request->validated()[$attribute], $directory);
                $img_urls[$attribute] = $img_url;
            }
        }

        Product::Id($request->id)->update(array_merge($request->validated(), $img_urls));

        return redirect()
            ->route('admin.product.list')
            ->with([
                'severity' => 'success',
                'message' => '商品を編集しました'
            ]);
    }
}

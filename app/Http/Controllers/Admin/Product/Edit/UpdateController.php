<?php

namespace App\Http\Controllers\Admin\Product\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Product\UpdateRequest;
use App\Models\Product;
use App\Services\FileService;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * 商品の編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        // 画像保存ディレクトリ
        $directory = 'product';

        // 画像の属性はストレージに保存・保存先URLを設定
        $img_urls = [];
        foreach (config('product.img_attribute') as $attribute) {
            if (isset($request->validated()[$attribute]) && $request->validated()[$attribute]) {
                $img_url = FileService::store($request->validated()[$attribute], $directory);
                $img_urls[$attribute] = $img_url;
            }
        }

        // 画像ファイルは取得したURLで上書きして保存
        Product::Id($request->id)->update(array_merge($request->validated(), $img_urls));

        return redirect()
            ->route('admin.product.list')
            ->with([
                'severity' => 'success',
                'message' => '商品を編集しました'
            ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Category\Create;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\CreateRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;

class CreateController extends Controller
{
    /**
     * カテゴリー新規作成
     *
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateRequest $request): RedirectResponse
    {
        Category::create($request->validated());

        return redirect()
            ->route('admin.category.list')
            ->with([
                'severity' => 'success',
                'message' => '新規カテゴリーを追加しました',
            ]);
    }
}

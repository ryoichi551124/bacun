<?php

namespace App\Http\Controllers\Admin\Category\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * カテゴリーの編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        Category::Id($request->id)->update($request->validated());

        return redirect()
            ->route('admin.category.list')
            ->with([
                'severity' => 'success',
                'message' => 'カテゴリーを編集しました',
            ]);
    }
}

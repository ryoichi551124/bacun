<?php

namespace App\Http\Controllers\Admin\Category\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Http\RedirectResponse;

class DeleteController extends Controller
{
    /**
     * カテゴリーの削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $category = Category::Id($request->route('id'))->first();
        $name = $category->name;
        $category->delete();

        return redirect()
            ->route('admin.category.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'カテゴリーを削除しました',
            ]);
    }
}

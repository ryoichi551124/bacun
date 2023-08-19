<?php

namespace App\Http\Controllers\Admin\Category\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class DeleteController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
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

<?php

namespace App\Http\Controllers\Admin\Category\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\UpdateRequest;
use App\Models\Category;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateRequest $request)
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

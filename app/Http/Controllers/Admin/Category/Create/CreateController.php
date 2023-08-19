<?php

namespace App\Http\Controllers\Admin\Category\Create;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Category\CreateRequest;
use App\Models\Category;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
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

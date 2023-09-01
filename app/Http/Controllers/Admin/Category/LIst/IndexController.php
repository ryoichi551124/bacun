<?php

namespace App\Http\Controllers\Admin\Category\List;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * カテゴリー新規作成・一覧ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $categories = Category::all();

        return Inertia::render('Admin/Category/List', [
            'categories' => $categories,
        ]);
    }
}

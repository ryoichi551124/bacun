<?php

namespace App\Http\Controllers\Admin\Order\Create;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 受注新規作成ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $prefs = config('pref');
        $statuses = config('user.status');
        $categories = Category::all()->toArray();

        return Inertia::render('Admin/Order/Create', [
            'prefs' => $prefs,
            'statuses' => $statuses,
            'categories' => $categories,
        ]);
    }
}

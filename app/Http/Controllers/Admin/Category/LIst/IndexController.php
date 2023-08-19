<?php

namespace App\Http\Controllers\Admin\Category\List;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $categories = Category::all();

        return Inertia::render('Admin/Category/List', [
            'categories' => $categories,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Basic\Edit;

use App\Http\Controllers\Controller;
use App\Models\Basic;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $basic = Basic::Data()->first();

        return Inertia::render('Admin/Basic/Edit', ['basic' => $basic]);
    }
}

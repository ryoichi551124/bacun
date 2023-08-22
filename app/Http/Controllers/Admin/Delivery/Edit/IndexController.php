<?php

namespace App\Http\Controllers\Admin\Delivery\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Delivery;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $delivery = Delivery::Id($request->route('id'))->first();

        return Inertia::render('Admin/Delivery/Edit', [
            'delivery' => $delivery,
        ]);
    }
}

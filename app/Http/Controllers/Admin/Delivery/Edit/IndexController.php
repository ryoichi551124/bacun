<?php

namespace App\Http\Controllers\Admin\Delivery\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Delivery;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 送料編集ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $delivery = Delivery::Id($request->route('id'))->first();

        return Inertia::render('Admin/Delivery/Edit', [
            'delivery' => $delivery,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Shipping\List;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 配送情報一覧
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $shippings = Shipping::all();

        return Inertia::render('Admin/Shipping/List', [
            'shippings' => $shippings,
        ]);
    }
}

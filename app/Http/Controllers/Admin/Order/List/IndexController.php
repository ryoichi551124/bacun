<?php

namespace App\Http\Controllers\Admin\Order\List;

use App\Http\Controllers\Controller;
use App\Models\Order;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 受注一覧ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $orders = Order::with('orderDetails')->get();

        return Inertia::render('Admin/Order/List', [
            'orders' => $orders,
        ]);
    }
}

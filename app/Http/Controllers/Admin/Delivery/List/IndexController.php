<?php

namespace App\Http\Controllers\Admin\Delivery\List;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * 送料管理
     */
    public function __invoke()
    {
        $deliveries = Delivery::all();

        return Inertia::render('Admin/Delivery/List', [
            'deliveries' => $deliveries,
        ]);
    }
}

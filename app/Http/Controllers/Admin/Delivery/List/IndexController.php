<?php

namespace App\Http\Controllers\Admin\Delivery\List;

use App\Http\Controllers\Controller;
use App\Models\Delivery;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 送料一覧ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $deliveries = Delivery::all();

        return Inertia::render('Admin/Delivery/List', [
            'deliveries' => $deliveries,
        ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Shipping\Edit;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 配送情報の編集ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $shipping = Shipping::Id($request->route('id'))->first()->toArray();

        // 元のデータと結合
        $shipping = array_merge(
            $shipping,
            split_zip($shipping['zip_code']),
        );

        $prefs = config('pref');

        return Inertia::render('Admin/Shipping/Edit', [
            'shipping' => $shipping,
            'prefs' => $prefs,
        ]);
    }
}

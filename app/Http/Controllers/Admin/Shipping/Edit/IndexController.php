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

        // 郵便番号、電話番号は編集出来るよう分割する
        $shipping_zip = array_values(split_zip($shipping['shipping_zip_code']));
        $shipping_tel = array_values(split_tel($shipping['shipping_tel']));
        // 元のデータと結合
        $shipping = array_merge(
            $shipping,
            [
                'shipping_zip_code1' => $shipping_zip[0],
                'shipping_zip_code2' => $shipping_zip[1]
            ],
            [
                'shipping_tel1' => $shipping_tel[0],
                'shipping_tel2' => $shipping_tel[1],
                'shipping_tel3' => $shipping_tel[2],
            ],
        );

        $user = User::Id($request->user_id)->first();
        $prefs = config('pref');

        return Inertia::render('Admin/Shipping/Edit', [
            'shipping' => $shipping,
            'user' => $user,
            'prefs' => $prefs,
        ]);
    }
}

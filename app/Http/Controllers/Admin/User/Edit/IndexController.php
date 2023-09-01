<?php

namespace App\Http\Controllers\Admin\User\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * 顧客編集ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $user = User::Id($request->route('id'))->first()->toArray();

        // 郵便番号、誕生日、電話番号は編集出来るよう分割する
        $user = array_merge(
            $user,
            split_zip($user['zip_code']),
            split_birth($user['birth_date']),
            split_tel($user['tel'])
        );

        $statuses = config('user.status');
        $prefs = config('pref');

        return Inertia::render('Admin/User/Edit', [
            'user' => $user,
            'statuses' => $statuses,
            'prefs' => $prefs,
        ]);
    }
}

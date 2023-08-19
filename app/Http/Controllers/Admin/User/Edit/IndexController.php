<?php

namespace App\Http\Controllers\Admin\User\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $user = User::Id($request->route('id'))->first()->toArray();
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

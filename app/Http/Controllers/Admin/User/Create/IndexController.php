<?php

namespace App\Http\Controllers\Admin\User\Create;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        $statuses = config('user.status');
        $prefs = config('pref');

        return Inertia::render('Admin/User/Create', [
            'statuses' => $statuses,
            'prefs' => $prefs,
        ]);
    }
}

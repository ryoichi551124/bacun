<?php

namespace App\Http\Controllers\Admin\Api\User;

use App\Http\Controllers\Controller;

use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SearchController extends Controller
{
    /**
     * 顧客検索
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request): JsonResponse
    {
        $users = [];
        if ($request->name || $request->email || $request->tel) {
            $users = User::where('last_name', 'LIKE', '%' . $request->name . '%')
                ->orWhere('first_name', 'LIKE', '%' . $request->name . '%')
                ->orWhere('last_kana', 'LIKE', '%' . $request->name . '%')
                ->orWhere('last_kana', 'LIKE', '%' . $request->name . '%')
                ->orWhere('email', 'LIKE', '%' . $request->email . '%')
                ->orWhere('tel', 'LIKE', '%' . $request->tel . '%')
                ->get();
        }

        return response()->json($users, 200);
    }
}

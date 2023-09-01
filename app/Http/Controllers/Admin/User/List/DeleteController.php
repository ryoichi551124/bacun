<?php

namespace App\Http\Controllers\Admin\User\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class DeleteController extends Controller
{
    /**
     * 顧客情報の削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $user = User::Id($request->route('id'))->first();
        $name = $user->last_name . $user->first_name;
        $user->delete();

        return redirect()
            ->route('admin.user.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'の顧客情報を削除しました',
            ]);
    }
}

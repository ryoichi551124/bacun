<?php

namespace App\Http\Controllers\Admin\User\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\User\UpdatePasswordReqeust;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class UpdatePasswordController extends Controller
{
    /**
     * 顧客のパスワード変更
     *
     * @param UpdatePasswordReqeust $request
     * @return RedirectResponse
     */
    public function __invoke(UpdatePasswordReqeust $request): RedirectResponse
    {
        User::Id($request->id)->update([
            'password' => Hash::make($request->validated()['password'])
        ]);

        return redirect()
            ->route('admin.user.list')
            ->with([
                'severity' => 'success',
                'message' => 'パスワードを変更しました'
            ]);
    }
}

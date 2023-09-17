<?php

namespace App\Http\Controllers\Admin\Admin\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\Admin\UpdatePasswordRequest;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;

class UpdatePasswordController extends Controller
{
    /**
     * 管理者パスワードの変更
     *
     * @param UpdatePasswordRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdatePasswordRequest $request): RedirectResponse
    {
        Admin::Id($request->id)->update([
            'password' => Hash::make($request->validated()['password'])
        ]);

        return redirect()
            ->route('admin.admin.list')
            ->with([
                'severity' => 'success',
                'message' => 'パスワードを変更しました',
            ]);
    }
}

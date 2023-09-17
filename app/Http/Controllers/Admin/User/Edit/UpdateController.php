<?php

namespace App\Http\Controllers\Admin\User\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\User\UpdateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * 顧客情報の編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        User::Id($request->id)->update($request->validated());

        return redirect()
            ->route('admin.user.list')
            ->with([
                'severity' => 'success',
                'message' => '顧客情報を編集しました'
            ]);
    }
}

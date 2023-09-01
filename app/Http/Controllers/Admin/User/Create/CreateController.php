<?php

namespace App\Http\Controllers\Admin\User\Create;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\User\CreateRequest;
use App\Models\User;
use Illuminate\Http\RedirectResponse;

class CreateController extends Controller
{
    /**
     * 顧客の新規作成
     *
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateRequest $request): RedirectResponse
    {
        User::create(array_merge(
            $request->validated(),
            ['password' => Hash::make($request->password)]
        ));

        return redirect()
            ->route('admin.user.list')
            ->with([
                'severity' => 'success',
                'message' => '新規顧客を登録しました',
            ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Admin\Create;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\Admin\CreateRequest;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;

class CreateController extends Controller
{
    /**
     * 管理者新規作成
     *
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateRequest $request): RedirectResponse
    {
        Admin::create(array_merge(
            $request->validated(),
            ['password' => Hash::make($request->password)]
        ));

        return redirect()
            ->route('admin.admin.list')
            ->with([
                'severity' => 'success',
                'message' => '新規管理者を登録しました',
            ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Admin\Create;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Admin\CreateRequest;
use App\Models\Admin;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
    {
        Admin::create($request->validated());

        return redirect()
            ->route('admin.admin.list')
            ->with([
                'severity' => 'success',
                'message' => '新規管理者を登録しました',
            ]);
    }
}

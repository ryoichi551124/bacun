<?php

namespace App\Http\Controllers\Admin\Admin\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Admin\UpdateRequest;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * 管理者編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        Admin::Id($request->id)->update($request->validated());

        return redirect()
            ->route('admin.admin.list')
            ->with([
                'severity' => 'success',
                'message' => '管理者を編集しました',
            ]);
    }
}

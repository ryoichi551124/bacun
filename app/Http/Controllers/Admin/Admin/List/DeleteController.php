<?php

namespace App\Http\Controllers\Admin\Admin\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;
use Illuminate\Http\RedirectResponse;

class DeleteController extends Controller
{
    /**
     * 管理者削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        // ルートユーザーは削除不可
        if ($request->route('id') == 1) {
            return redirect()
                ->route('admin.admin.list')
                ->with([
                    'severity' => 'warning',
                    'message' => 'この管理者は削除出来ません',
                ]);
        }

        $admin = Admin::Id($request->route('id'))->first();
        $name = $admin->name;
        $admin->delete();

        return redirect()
            ->route('admin.admin.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'の管理者登録を削除しました',
            ]);
    }
}

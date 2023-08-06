<?php

namespace App\Http\Controllers\Admin\Admin\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Admin;

class DeleteController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
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

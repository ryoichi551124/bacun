<?php

namespace App\Http\Controllers\Admin\Shipping\List;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    /**
     * 配送情報の削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $shipping = Shipping::Id($request->route('id'))->first();
        $user = User::Id($shipping->user_id)->first();
        $name = $user->last_name . $user->first_name;
        $shipping->delete();

        return redirect()
            ->route('admin.shipping.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'の配送情報を削除しました',
            ]);
    }
}

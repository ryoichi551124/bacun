<?php

namespace App\Http\Controllers\Admin\Delivery\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Delivery;
use Illuminate\Http\RedirectResponse;

class DeleteController extends Controller
{
    /**
     * 送料削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $dlivery = Delivery::Id($request->route('id'))->first();
        $name = $dlivery->name;
        $dlivery->delete();

        return redirect()
            ->route('admin.delivery.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'の送料を削除しました'
            ]);
    }
}

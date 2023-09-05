<?php

namespace App\Http\Controllers\Admin\Shipping\Edit;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use App\Http\Requests\Admin\Shipping\UpdateRequest;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * 配送情報の編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        Shipping::Id($request->route('id'))->update($request->validated());

        return redirect()
            ->route('admin.shipping.list')
            ->with([
                'severity' => 'success',
                'message' => '配送情報を編集しました',
            ]);
    }
}

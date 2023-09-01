<?php

namespace App\Http\Controllers\Admin\Delivery\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Delivery\UpdateRequest;
use App\Models\Delivery;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * 送料編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        Delivery::Id($request->id)->update($request->validated());

        return redirect()
            ->route('admin.delivery.list')
            ->with([
                'severity' => 'success',
                'message' => '配送料金を編集しました'
            ]);
    }
}

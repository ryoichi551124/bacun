<?php

namespace App\Http\Controllers\Admin\Delivery\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Delivery\UpdateRequest;
use App\Models\Delivery;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateRequest $request)
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

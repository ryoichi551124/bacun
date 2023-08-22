<?php

namespace App\Http\Controllers\Admin\Delivery\Create;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Delivery\CreateRequest;
use App\Models\Delivery;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
    {
        Delivery::create($request->validated());

        return redirect()
            ->route('admin.delivery.list')
            ->with([
                'severity' => 'success',
                'message' => '新規送料を作成しました',
            ]);
    }
}

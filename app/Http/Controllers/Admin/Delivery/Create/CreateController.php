<?php

namespace App\Http\Controllers\Admin\Delivery\Create;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Delivery\CreateRequest;
use App\Models\Delivery;
use Illuminate\Http\RedirectResponse;

class CreateController extends Controller
{
    /**
     * 送料新規作成
     *
     * @param CreateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateRequest $request): RedirectResponse
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

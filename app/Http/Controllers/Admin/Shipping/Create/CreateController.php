<?php

namespace App\Http\Controllers\Admin\Shipping\Create;

use App\Http\Controllers\Controller;
use App\Models\Shipping;
use App\Http\Requests\Admin\shipping\CreateRequest;
use Illuminate\Http\RedirectResponse;

class CreateController extends Controller
{
    /**
     * 配送先情報の新規作成
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(CreateRequest $request): RedirectResponse
    {
        //dd($request->validated());
        Shipping::create($request->validated());

        return redirect()
            ->route('admin.shipping.list')
            ->with([
                'severity' => 'success',
                'message' => '配送先情報を作成しました',
            ]);
    }
}

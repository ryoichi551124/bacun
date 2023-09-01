<?php

namespace App\Http\Controllers\Admin\Basic\Edit;

use App\Http\Controllers\Controller;
use App\Models\Basic;
use App\Http\Requests\Admin\Basic\UpdateRequest;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class UpdateController extends Controller
{
    /**
     * 基本情報の作成・編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        $basic = Basic::Data()->first();

        // 基本情報が無ければ作成、以降は編集のみ
        if (is_null($basic)) {
            Basic::create($request->validated());
        } else {
            $basic->update($request->validated());
        }

        return redirect()
            ->route('admin.basic.edit')
            ->with([
                'severity' => 'success',
                'message' => '基本情報を更新しました',
            ]);
    }
}

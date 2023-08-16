<?php

namespace App\Http\Controllers\Admin\Basic\Edit;

use App\Http\Controllers\Controller;
use App\Models\Basic;
use App\Http\Requests\Admin\Basic\UpdateRequest;
use Inertia\Inertia;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateRequest $request)
    {
        $basic = Basic::Data()->first();

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

<?php

namespace App\Http\Controllers\Admin\Delivery\List;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Delivery;

class DeleteController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
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

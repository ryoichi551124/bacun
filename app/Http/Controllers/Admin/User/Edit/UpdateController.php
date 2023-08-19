<?php

namespace App\Http\Controllers\Admin\User\Edit;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\User\UpdateRequest;
use App\Models\User;

class UpdateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateRequest $request)
    {
        User::Id($request->id)->update(array_merge(
            $request->validated(),
            ['password' => Hash::make($request->password)]
        ));

        return redirect()
            ->route('admin.user.list')
            ->with([
                'severity' => 'success',
                'message' => '顧客情報を編集しました'
            ]);
    }
}

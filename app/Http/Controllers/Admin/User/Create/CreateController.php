<?php

namespace App\Http\Controllers\Admin\User\Create;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Admin\User\CreateRequest;
use App\Models\User;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request)
    {
        User::create(array_merge(
            $request->validated(),
            ['password' => Hash::make($request->password)]
        ));

        return redirect()
            ->route('admin.user.list')
            ->with([
                'severity' => 'success',
                'message' => '新規顧客を登録しました',
            ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\Admin\Create;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        session()->flash('message', 'ユーザー登録しました。');
        return redirect()->route('admin.admin.list');
    }
}

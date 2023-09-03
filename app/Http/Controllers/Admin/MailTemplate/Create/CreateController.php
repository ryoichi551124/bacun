<?php

namespace App\Http\Controllers\Admin\MailTemplate\Create;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Admin\MailTemplate\CreateRequest;
use App\Models\MailTemplate;

class CreateController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateRequest $request): RedirectResponse
    {
        MailTemplate::create($request->validated());

        return redirect()
            ->route('admin.mailtemplate.list')
            ->with([
                'severity' => 'success',
                'message' => '新規メールテンプレートを作成しました',
            ]);
    }
}

<?php

namespace App\Http\Controllers\Admin\MailTemplate\Edit;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\MailTemplate\UpdateRequest;
use App\Models\MailTemplate;
use Illuminate\Http\RedirectResponse;

class UpdateController extends Controller
{
    /**
     * メールテンプレート編集
     *
     * @param UpdateRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateRequest $request): RedirectResponse
    {
        MailTemplate::Id($request->id)->update($request->validated());

        return redirect()
            ->route('admin.mailtemplate.list')
            ->with([
                'severity' => 'success',
                'message' => 'メールテンプレートを編集しました',
            ]);
    }
}

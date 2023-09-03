<?php

namespace App\Http\Controllers\Admin\MailTemplate\List;

use App\Http\Controllers\Controller;
use App\Models\MailTemplate;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class DeleteController extends Controller
{
    /**
     * メールテンプレート削除
     *
     * @param Request $request
     * @return RedirectResponse
     */
    public function __invoke(Request $request): RedirectResponse
    {
        $template = MailTemplate::Id($request->route('id'))->first();
        $name = $template->name;
        $template->delete();

        return redirect()
            ->route('admin.mailtemplate.list')
            ->with([
                'severity' => 'success',
                'message' => $name . 'のメールテンプレートを削除しました',
            ]);
    }
}

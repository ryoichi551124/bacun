<?php

namespace App\Http\Controllers\Admin\MailTemplate\Edit;

use App\Http\Controllers\Controller;
use App\Models\MailTemplate;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * メールテンプレート編集ページ
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $template = MailTemplate::Id($request->route('id'))->first();

        return Inertia::render('Admin/MailTemplate/Edit', [
            'template' => $template,
        ]);
    }
}

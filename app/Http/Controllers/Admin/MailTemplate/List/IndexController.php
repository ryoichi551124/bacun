<?php

namespace App\Http\Controllers\Admin\MailTemplate\List;

use App\Http\Controllers\Controller;
use App\Models\MailTemplate;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * メールテンプレート一覧ページ
     *
     * @return Response
     */
    public function __invoke(): Response
    {
        $templates = MailTemplate::all();

        return Inertia::render('Admin/MailTemplate/List', [
            'templates' => $templates,
        ]);
    }
}

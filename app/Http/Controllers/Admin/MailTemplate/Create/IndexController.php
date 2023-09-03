<?php

namespace App\Http\Controllers\Admin\MailTemplate\Create;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class IndexController extends Controller
{
    /**
     * メールテンプレート新規作成
     *
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        return Inertia::render('Admin/MailTemplate/Create');
    }
}

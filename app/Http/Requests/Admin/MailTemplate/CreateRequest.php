<?php

namespace App\Http\Requests\Admin\MailTemplate;

use Illuminate\Foundation\Http\FormRequest;

class CreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'name'              => ['required', 'string', 'max:128'],
            'subject'           => ['required', 'string', 'max:128'],
            'body'              => ['required', 'string'],
            'from_name'         => ['required', 'string', 'max:64'],
            'from_address'      => ['required', 'string', 'max:128'],
            'reply_to_name'     => ['nullable', 'string', 'max:64'],
            'reply_to_address'  => ['nullable', 'string'],
            'cc_address'        => ['nullable', 'string'],
            'bcc_address'       => ['nullable', 'string'],
        ];
    }

    /**
     * 属性
     *
     * @return array
     */
    public function attributes(): array
    {
        return [
            'name'              => 'テンプレート名',
            'subject'           => 'メール件名',
            'body'              => 'メール本文',
            'from_name'         => '差出人名',
            'from_address'      => '差出人メールアドレス',
            'reply_to_name'     => '返信先名',
            'reply_to_address'  => '返信先メールアドレス',
            'cc_address'        => 'CCアドレス',
            'bcc_address'       => 'BCCアドレス',
        ];
    }

    /**
     * エラーメッセージ
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'required'  => ':attributeは必須項目です',
            'string'    => ':attributeは文字列を入力してください',
            'max'       => ':attributeは:max文字以内で入力してください',
        ];
    }
}

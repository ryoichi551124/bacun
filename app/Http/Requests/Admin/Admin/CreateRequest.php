<?php

namespace App\Http\Requests\Admin\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use App\Models\Admin;

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
            'name'      => ['required', 'string', 'max:64'],
            'email'     => [
                'required', 'email', 'max:128',
                Rule::unique(Admin::class)
            ],
            'password'  => ['required', 'confirmed', Password::defaults()],
            'role'      => ['nullable', Rule::in('admin', 'member')],
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
            'name'      => '管理者名',
            'email'     => 'メールアドレス',
            'password'  => 'パスワード',
            'role'      => '権限名',
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
            'required'      => ':attributeは必須項目です',
            'string'        => ':attributeは文字列を入力してください',
            'email'         => '不正なメールアドレスです',
            'confirmed'     => '確認用の:attributeに誤りがあります',
            'unique'        => 'この:attributeはすでに登録されています',
            'max'           => ':attributeは:max文字以内で入力してください',
            'in'            => '無効な権限名です',
        ];
    }
}

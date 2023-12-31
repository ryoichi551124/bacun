<?php

namespace App\Http\Requests\Admin\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Models\Admin;

class UpdateRequest extends FormRequest
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
                Rule::unique(Admin::class)->ignore($this->route('id'))
            ],
            'role'      => ['required', Rule::in('admin', 'member')],
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
            'unique'        => 'この:attributeはすでに登録されています',
            'max'           => ':attributeは:max文字以内で入力してください',
            'in'            => '無効な権限名です',
        ];
    }
}

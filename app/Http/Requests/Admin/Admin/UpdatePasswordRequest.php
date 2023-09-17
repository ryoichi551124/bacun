<?php

namespace App\Http\Requests\Admin\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class UpdatePasswordRequest extends FormRequest
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
            'password'  => ['required', 'confirmed', Password::defaults()],
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
            'password'  => 'パスワード',
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
            'confirmed'     => '確認用の:attributeに誤りがあります',
            'max'           => ':attributeは:max文字以内で入力してください',
        ];
    }
}

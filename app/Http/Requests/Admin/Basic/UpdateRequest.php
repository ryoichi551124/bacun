<?php

namespace App\Http\Requests\Admin\Basic;

use Illuminate\Foundation\Http\FormRequest;

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
            'company_name'  => ['nullable', 'string', 'max:128'],
            'company_kana'  => ['nullable', 'string', 'max:128'],
            'zip_code1'     => ['nullable', 'regex:/^[0-9]{3}-[0-9]{4}$/i'],
            'zip_code2'     => ['nullable', 'regex:/^[0-9]{3}-[0-9]{4}$/i'],
            'address1'      => ['nullable', 'string', 'max:256'],
            'address2'      => ['nullable', 'string', 'max:256'],
            'tel1'          => ['nullable', 'regex:/^([0-9]|-){12,13}$/i'],
            'tel2'          => ['nullable', 'regex:/^([0-9]|-){12,13}$/i'],
            'email1'        => ['nullable', 'email', 'max:128'],
            'email2'        => ['nullable', 'email', 'max:128'],
            'shop_name'     => ['nullable', 'string', 'max:128'],
            'shop_kana'     => ['nullable', 'string', 'max:128'],
            'shop_message'  => ['nullable', 'string'],
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
            'company_name'  => '会社名',
            'compnay_kana'  => '会社名カナ',
            'zip_code1'     => '会社郵便番号1',
            'zip_code2'     => '会社郵便番号2',
            'address1'      => '会社住所1',
            'address2'      => '会社住所2',
            'tel1'          => '電話番号1',
            'tel2'          => '電話番号2',
            'email1'        => 'メールアドレス1',
            'email2'        => 'メースアドレス2',
            'shop_name'     => 'ショップ名',
            'shop_kana'     => 'ショップ名カナ',
            'shop_message'  => 'ショップメッセージ',
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
            'max'           => ':attributeは:max文字以内で入力してください',
            'regex'         => ':attributeは不正な値です',
        ];
    }
}

<?php

namespace App\Http\Requests\Admin\Shipping;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
    public function rules(Request $request): array
    {
        return [
            'last_name'    => ['required', 'string', 'max:64'],
            'first_name'   => ['required', 'string', 'max:64'],
            'last_kana'    => ['required', 'string', 'max:64'],
            'first_kana'   => ['required', 'string', 'max:64'],
            'zip_code'     => ['nullable', 'regex:/^\d{7}$/i'],
            'pref'         => ['required', 'string', 'max:8'],
            'city'         => ['required', 'string', 'max:32'],
            'address'      => ['required', 'string', 'max:128'],
            'building'     => ['nullable', 'string', 'max:128'],
            'memo'         => ['nullable', 'string'],
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
            'user_id'      => 'ユーザーID',
            'last_name'    => '姓',
            'first_name'   => '名',
            'last_kana'    => '姓カナ',
            'first_kana'   => '名カナ',
            'zip_code'     => '郵便番号',
            'pref'         => '都道府県',
            'city'         => '市区町村',
            'address'      => '丁目番地号',
            'building'     => '建物名',
            'memo'         => '配送メモ',
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
            'date'          => ':attributeは無効な日付です',
        ];
    }

    /**
     * 誕生日、郵便番号、電話番号の結合
     */
    public function getValidatorInstance()
    {
        $input = $this->all();

        // 郵便番号
        $this->merge(combine_zip($input['zip_code1'], $input['zip_code2']));

        return parent::getValidatorInstance();
    }
}

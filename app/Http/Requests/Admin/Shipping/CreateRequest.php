<?php

namespace App\Http\Requests\Admin\shipping;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
use App\Enums\SexType;

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
            'order_id'              => ['required'],
            'user_id'               => ['required'],
            'shipping_last_name'    => ['required', 'string', 'max:64'],
            'shipping_first_name'   => ['required', 'string', 'max:64'],
            'shipping_last_kana'    => ['required', 'string', 'max:64'],
            'shipping_first_kana'   => ['required', 'string', 'max:64'],
            'shipping_zip_code'     => ['nullable', 'regex:/^\d{7}$/i'],
            'shipping_pref'         => ['required', 'string', 'max:8'],
            'shipping_city'         => ['required', 'string', 'max:32'],
            'shipping_address'      => ['required', 'string', 'max:128'],
            'shipping_building'     => ['nullable', 'string', 'max:128'],
            'shipping_tel'          => ['nullable', 'regex:/^\d{10,11}$/i'],
            'shipping_email'        => ['nullable', 'email', 'max:128'],
            'shipping_sex'          => ['nullable', new Enum(SexType::class)],
            'shipping_date'         => ['nullable', 'date'],
            'shipping_memo'         => ['nullable', 'string'],
            'tracking_number'       => ['nullable', 'string', 'max:128'],
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
            'order_id'              => 'オーダーID',
            'user_id'               => 'ユーザーID',
            'shipping_last_name'    => '姓',
            'shipping_first_name'   => '名',
            'shipping_last_kana'    => '姓カナ',
            'shipping_first_kana'   => '名カナ',
            'shipping_zip_code'     => '郵便番号',
            'shipping_pref'         => '都道府県',
            'shipping_city'         => '市区町村',
            'shipping_address'      => '丁目番地号',
            'shipping_building'     => '建物名',
            'sihpping_tel'          => '電話番号',
            'shipping_email'        => 'メールアドレス',
            'shipping_sex'          => '性別',
            'shipping_date'         => '配送日',
            'shipping_memo'         => '配送メモ',
            'tracking_number'       => 'トラッキングナンバー',
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
            'enum'          => ':attributeは無効な権限です',
        ];
    }
}

<?php

namespace App\Http\Requests\Admin\Order;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
use App\Enums\SexType;
use App\Rules\UnsignedTinyInteger;
use App\Rules\UnsignedMediumInteger;

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
            'user_id'           => ['required'],
            'order_last_name'   => ['required', 'string', 'max:64'],
            'order_first_name'  => ['required', 'string', 'max:64'],
            'order_last_kana'   => ['required', 'string', 'max64'],
            'order_first_kana'  => ['required', 'string', 'max:64'],
            'order_zip_code'    => ['nullable', 'regex:/^\d{7}$/i'],
            'order_pref'        => ['required', 'string', 'max:8'],
            'order_city'        => ['required', 'string', 'max:32'],
            'order_address'     => ['required', 'string', 'max:128'],
            'order_building'    => ['nullable', 'string', 'max:128'],
            'order_tel'         => ['nullable', 'regex:/^\d{10,11}$/i'],
            'order_email'       => ['nullable', 'email', 'max:128'],
            'order_sex'         => ['required', new Enum(SexType::class)],
            'order_memo'        => ['nullable', 'string'],
            'order_status'      => ['required', new UnsignedTinyInteger],
            'subtotal'          => ['required', new UnsignedMediumInteger],
            'total_deliv_fee'   => ['required', new UnsignedMediumInteger],
            'tax'               => ['required', new UnsignedMediumInteger],
            'total'             => ['required', new UnsignedMediumInteger],
            'payment_method'    => ['required', 'string', 'max:64'],
            'payment_date'      => ['nullable', 'date'],
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
            'user_id'           => 'ユーザーID',
            'order_last_name'   => '姓',
            'order_first_name'  => '名',
            'order_last_kana'   => '姓カナ',
            'order_first_kana'  => '名カナ',
            'oder_zip_code'     => '郵便番号',
            'order_pref'        => '都道府県',
            'order_city'        => '市区町村',
            'order_address'     => '丁目番地号',
            'order_building'    => '建物名',
            'order_tel'         => '電話番号',
            'oder_eamil'        => 'メールアドレス',
            'order_sex'         => '性別',
            'order_memo'        => 'オーダーメモ',
            'order_status'      => 'ステータス',
            'subtotal'          => '小計',
            'total_deliv_fee'   => '送料合計',
            'tax'               => '消費税',
            'total'             => '合計',
            'payment_method'    => '支払い方法',
            'payment_date'      => '支払い日',
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

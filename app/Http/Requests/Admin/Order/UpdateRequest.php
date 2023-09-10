<?php

namespace App\Http\Requests\Admin\Order;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\UnsignedTinyInteger;
use App\Rules\UnsignedMediumInteger;

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
            'last_name'         => ['required', 'string', 'max:64'],
            'first_name'        => ['required', 'string', 'max:64'],
            'last_kana'         => ['required', 'string', 'max64'],
            'first_kana'        => ['required', 'string', 'max:64'],
            'zip_code'          => ['nullable', 'regex:/^\d{7}$/i'],
            'pref'              => ['required', 'string', 'max:8'],
            'city'              => ['required', 'string', 'max:32'],
            'address'           => ['required', 'string', 'max:128'],
            'building'          => ['nullable', 'string', 'max:128'],
            'tel'               => ['nullable', 'regex:/^\d{10,11}$/i'],
            'email'             => ['nullable', 'email', 'max:128'],
            'sex'               => ['required', Rule::in(1, 2)],
            'memo'              => ['nullable', 'string'],
            'status'            => ['required', new UnsignedTinyInteger],
            'tracking_number'   => ['nullable', 'string', 'max:128'],
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
            'last_name'         => '姓',
            'first_name'        => '名',
            'last_kana'         => '姓カナ',
            'first_kana'        => '名カナ',
            'zip_code'          => '郵便番号',
            'pref'              => '都道府県',
            'city'              => '市区町村',
            'address'           => '丁目番地号',
            'building'          => '建物名',
            'tel'               => '電話番号',
            'eamil'             => 'メールアドレス',
            'sex'               => '性別',
            'memo'              => 'オーダーメモ',
            'status'            => 'ステータス',
            'tracking_number'   => 'トラッキングナンバー',
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
            'in'            => ':attributeは無効な値です',
        ];
    }

    /**
     * 郵便番号の結合
     */
    public function getValidatorInstance()
    {
        $input = $this->all();

        // 郵便番号
        $this->merge(combine_zip($input['zip_code1'], $input['zip_code2']));

        return parent::getValidatorInstance();
    }
}

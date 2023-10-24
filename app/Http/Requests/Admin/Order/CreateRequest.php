<?php

namespace App\Http\Requests\Admin\Order;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
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
            // 注文者情報
            'user_id'                       => ['required'],
            'order_user.last_name'          => ['required', 'string', 'max:64'],
            'order_user.first_name'         => ['required', 'string', 'max:64'],
            'order_user.last_kana'          => ['required', 'string', 'max:64'],
            'order_user.first_kana'         => ['required', 'string', 'max:64'],
            'order_user.zip_code'           => ['nullable', 'regex:/^\d{7}$/i'],
            'order_user.pref'               => ['required', 'string', 'max:8'],
            'order_user.city'               => ['required', 'string', 'max:32'],
            'order_user.address'            => ['required', 'string', 'max:128'],
            'order_user.building'           => ['nullable', 'string', 'max:128'],
            'order_user.tel'                => ['nullable', 'regex:/^\d{10,11}$/i'],
            'order_user.email'              => ['nullable', 'email', 'max:128'],
            'order_user.sex'                => ['required', Rule::in(1, 2)],
            'order_user.memo'               => ['nullable', 'string'],
            // 配送先情報
            'order_shipping.last_name'      => ['required', 'string', 'max:64'],
            'order_shipping.first_name'     => ['required', 'string', 'max:64'],
            'order_shipping.last_kana'      => ['required', 'string', 'max:64'],
            'order_shipping.first_kana'     => ['required', 'string', 'max:64'],
            'order_shipping.zip_code'       => ['nullable', 'regex:/^\d{7}$/i'],
            'order_shipping.pref'           => ['required', 'string', 'max:8'],
            'order_shipping.city'           => ['required', 'string', 'max:32'],
            'order_shipping.address'        => ['required', 'string', 'max:128'],
            'order_shipping.building'       => ['nullable', 'string', 'max:128'],
            'order_shipping.memo'           => ['nullable', 'string'],
            // 購入商品
            'orderDetails.*.product_id'     => ['required'],
            'orderDetails.*.product_name'   => ['required', 'string', 'max:128'],
            'orderDetails.*.price'          => ['required', new UnsignedMediumInteger],
            'orderDetails.*.quantity'       => ['required', new UnsignedTinyInteger],
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
            // 注文者情報
            'user_id'                       => 'ユーザーID',
            'order_user.last_name'          => '姓',
            'order_user.first_name'         => '名',
            'order_user.last_kana'          => '姓カナ',
            'order_user.first_kana'         => '名カナ',
            'order_user.zip_code'           => '郵便番号',
            'order_user.pref'               => '都道府県',
            'order_user.city'               => '市区町村',
            'order_user.address'            => '丁目番地号',
            'order_user.building'           => '建物名',
            'order_user.tel'                => '電話番号',
            'order_user.eamil'              => 'メールアドレス',
            'order_user.sex'                => '性別',
            'order_user.memo'               => 'オーダーメモ',
            // 配送先情報
            'order_shipping.last_name'      => '姓',
            'order_shipping.first_name'     => '名',
            'order_shipping.last_kana'      => '姓カナ',
            'order_shipping.first_kana'     => '名カナ',
            'order_shipping.zip_code'       => '郵便番号',
            'order_shipping.pref'           => '都道府県',
            'order_shipping.city'           => '市区町村',
            'order_shipping.address'        => '丁目番地',
            'order_shipping.building'       => '建物名',
            'order_shipping.memo'           => '配送先メモ',
            // 購入商品
            'orderDetails.*.product_id'     => '商品ID',
            'orderDetails.*.product_name'   => '商品名',
            'orderDetails.*.price'          => '単価',
            'orderDetails.*.quantity'       => '個数',
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

    /**
     * 郵便番号、電話番号の結合
     */
    public function getValidatorInstance()
    {
        $order_user = $this->order_user;
        $order_shipping = $this->order_shipping;

        // 注文者郵便番号、電話番号
        $this->merge(['order_user' => array_merge(
            $order_user,
            combine_zip($order_user['zip_code1'], $order_user['zip_code2']),
            combine_tel($order_user['tel1'], $order_user['tel2'], $order_user['tel3'])
        )]);

        // 配送先郵便番号
        $this->merge(['order_shipping' => array_merge(
            $order_shipping,
            combine_zip($order_shipping['zip_code1'], $order_shipping['zip_code2'])
        )]);

        return parent::getValidatorInstance();
    }
}

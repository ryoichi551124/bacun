<?php

namespace App\Http\Requests\Admin\OrderDetail;

use Illuminate\Foundation\Http\FormRequest;
use App\Rules\UnsignedMediumInteger;
use App\Rules\UnsignedTinyInteger;

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
            'order_id'      => ['required'],
            'product_id'    => ['required'],
            'product_name'  => ['required', 'string', 'max:128'],
            'price'         => ['required', new UnsignedMediumInteger],
            'quantity'      => ['required', new UnsignedTinyInteger],
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
            'order_id'      => 'オーダーID',
            'product_id'    => '商品ID',
            'product_name'  => '商品名',
            'price'         => '料金',
            'quantity'      => '数量',
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
            'max'           => ':attributeは:max文字以内で入力してください',
        ];
    }
}

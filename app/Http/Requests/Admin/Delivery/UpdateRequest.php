<?php

namespace App\Http\Requests\Admin\Delivery;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\UnsignedTinyInteger;
use App\Rules\UnsignedSmallInteger;
use App\Models\Delivery;

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
            'name'          => [
                'required', 'string', 'max:128',
                Rule::unique(Delivery::class)->ignore($this->route('id'))
            ],
            'description'   => ['nullable', 'string'],
            'duration'      => ['nullable', 'string'],
            'delivery_fee1' => ['nullable', new UnsignedSmallInteger],
            'delivery_fee2' => ['nullable', new UnsignedSmallInteger],
            'category'      => ['nullable', 'string'],
            'rank'          => ['nullable', new UnsignedTinyInteger],
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
            'name'          => '送料名',
            'description'   => '送料説明',
            'duration'      => '配送日数',
            'delivery_fee1' => '送料',
            'delivery_fee2' => '送料（沖縄・離島料金）',
            'category'      => '配送区分',
            'rank'          => '並び順',
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

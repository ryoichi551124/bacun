<?php

namespace App\Http\Requests\Admin\Category;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use App\Rules\UnsignedTinyInteger;
use App\Models\Category;

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
            'name'  => ['required', 'string', 'max:128', Rule::unique(Category::class)],
            'rank'  => ['nullable', new UnsignedTinyInteger],
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
            'name'  => 'カテゴリー名',
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
            'required'  => ':attributeは必須項目です',
            'string'    => ':attributeは文字列を入力してください',
            'max'       => ':attributeは:max文字以内で入力してください',
        ];
    }
}

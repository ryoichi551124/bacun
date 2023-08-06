<?php

namespace App\Http\Requests\Admin\Product;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;
use App\Enums\ProductStatusType;
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
            'category_id'       => ['nullable'],
            'name'              => ['required', 'string', 'max:128'],
            'thumbnail'         => ['nullable', 'string', 'url'],
            'sub_img1'          => ['nullable', 'string', 'url'],
            'sub_img2'          => ['nullable', 'string', 'url'],
            'sub_img3'          => ['nullable', 'string', 'url'],
            'sub_img4'          => ['nullable', 'string', 'url'],
            'content1'          => ['nullable', 'string'],
            'content2'          => ['nullable', 'string'],
            'content3'          => ['nullable', 'string'],
            'content4'          => ['nullable', 'string'],
            'memo'              => ['nullable', 'string'],
            'status'            => ['required', new Enum(ProductStatusType::class)],
            'tag'               => ['nullable', new UnsignedTinyInteger],
            'rank'              => ['nullable', new UnsignedMediumInteger],
            'regular_price'     => ['required', new UnsignedMediumInteger],
            'sales_price'       => ['required', new UnsignedMediumInteger],
            'delivery_id'       => ['required'],
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
            'category_id'       => 'カテゴリーID',
            'name'              => '商品名',
            'thumbnail'         => 'サムネイル画像',
            'main_img'          => 'メイン画像',
            'sub_img1'          => 'サブ画像1',
            'sub_img2'          => 'サブ画像2',
            'sub_img3'          => 'サブ画像3',
            'sub_img4'          => 'サブ画像4',
            'content1'          => '商品説明1',
            'content2'          => '商品説明2',
            'content3'          => '商品説明3',
            'content4'          => '商品説明4',
            'memo'              => 'メモ',
            'status'            => 'ステータス',
            'tag'               => 'タグ',
            'rank'              => '並び順',
            'regular_price'     => '通常料金',
            'sales_price'       => '販売料金',
            'delivery_id'       => '送料ID',
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
            'url'           => '不正なURLです',
            'max'           => ':attributeは:max文字以内で入力してください',
            'enum'          => ':attributeは無効な権限です',
        ];
    }
}
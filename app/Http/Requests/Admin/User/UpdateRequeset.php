<?php

namespace App\Http\Requests\Admin\User;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rules\Enum;
use App\Enums\SexType;
use App\Enums\UserStatusType;
use App\Models\User;

class UpdateRequeset extends FormRequest
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
            'email'         => [
                'required', 'email', 'confirmed', 'max:128',
                Rule::unique(User::class)->ignore($this->route('id'))
            ],
            'password'      => ['required', 'confirmed', Password::defaults()],
            'last_name'     => ['required', 'string', 'max:64'],
            'first_name'    => ['required', 'string', 'max:64'],
            'last_kana'     => ['required', 'string', 'max:64'],
            'first_kana'    => ['required', 'string', 'max:64'],
            'zip_code'      => ['nullable', 'regex:/^\d{7}$/i'],
            'pref'          => ['required', 'string', 'max:8'],
            'city'          => ['required', 'string', 'max:32'],
            'address'       => ['required', 'string', 'max:128'],
            'building'      => ['nullable', 'string', 'max:128'],
            'tel'           => ['nullable', 'regex:/^\d{10,11}$/i'],
            'sex'           => ['nullable', new Enum(SexType::class)],
            'birth_date'    => ['nullable', 'date'],
            'birth_year'    => ['nullable'],
            'birth_month'   => ['nullable'],
            'birth_day'     => ['nullable'],
            'memo'          => ['nullable', 'string'],
            'status'        => ['required', new Enum(UserStatusType::class)],
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
            'email'         => 'メールアドレス',
            'password'      => 'パスワード',
            'last_name'     => '姓',
            'first_name'    => '名',
            'last_kana'     => '姓カナ',
            'first_kana'    => '名カナ',
            'zip_code'      => '郵便番号',
            'pref'          => '都道府県',
            'city'          => '市区町村',
            'address'       => '丁目番地号',
            'building'      => '建物名',
            'tel'           => '電話番号',
            'sex'           => '性別',
            'birth_date'    => '誕生日',
            'birth_year'    => '年',
            'birth_month'   => '月',
            'birth_day'     => '日',
            'memo'          => 'メモ',
            'status'        => 'ステータス',
        ];
    }

    /**
     * エラーメッセージ
     *
     * @return void
     */
    public function messages()
    {
        return [
            'required'      => ':attributeは必須項目です',
            'string'        => ':attributeは文字列を入力してください',
            'email'         => '不正なメールアドレスです',
            'max'           => ':attributeは:max文字以内で入力してください',
            'regex'         => ':attributeは不正な値です',
            'date'          => ':attributeは無効な日付です',
            'confirmed'     => '確認用の:attributeに誤りがあります',
            'unique'        => 'この:attributeはすでに登録されています',
            'enum'          => ':attributeは無効な権限です',
        ];
    }

    /**
     * 誕生日結合用
     */
    public function getValidatorInstance()
    {
        if (
            $this->input('birth_year') &&
            $this->input('birth_month') &&
            $this->input('birth_day')
        ) {
            $birth_date = implode('-', $this->only([
                'birth_year',
                'birth_month',
                'birth_day'
            ]));
            $this->merge([
                'birth_date' => $birth_date
            ]);
        }

        return parent::getValidatorInstance();
    }
}

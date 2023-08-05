<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UnsignedMediumInteger implements ValidationRule
{
    /**
     * UnsignedMediumIntegerの判定
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (
            !is_numeric($value)
            && $value < 0
            && 16777215 < $value
            && intval($value) !== $value
        ) {
            $fail(':attributeは0から16777215の数値で指定してください');
        }
    }
}

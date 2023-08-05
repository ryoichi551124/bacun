<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class UnsignedSmallInteger implements ValidationRule
{
    /**
     * UnsignedSmallIntegerの判定
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (
            !is_numeric($value)
            && $value < 0
            && 65535 < $value
            && intval($value) !== $value
        ) {
            $fail(':attributeは0から65535の数値で指定してください');
        }
    }
}

<?php

if (!function_exists('combine_zip')) {
    /**
     * 郵便番号の結合
     *
     * @param string $zip_code1
     * @param string $zip_code2
     * @return array
     */
    function combine_zip(?string $zip_code1, ?string $zip_code2): array
    {
        if ($zip_code1 && $zip_code2) {
            return ['zip_code' => $zip_code1 . $zip_code2];
        }
        return ['zip_code' => null];
    }
}

if (!function_exists('split_zip')) {
    /**
     * 郵便番号の分解
     *
     * @param string $zip_code
     * @return array
     */
    function split_zip(?string $zip_code): array
    {
        if ($zip_code) {
            return [
                'zip_code1' => substr($zip_code, 0, 3),
                'zip_code2' => substr($zip_code, -4),
            ];
        }
        return ['zip_code1' => null, 'zip_code2' => null];
    }
}

if (!function_exists('combine_birth')) {
    /**
     * 誕生日の結合
     *
     * @param string $birth_year
     * @param string $birth_month
     * @param string $birth_day
     * @return array
     */
    function combine_birth(?string $birth_year, ?string $birth_month, ?string $birth_day): array
    {
        if ($birth_year && $birth_month && $birth_day) {
            return ['birth_date' => implode('-', [
                $birth_year, $birth_month, $birth_day
            ])];
        }
        return ['birth_date' => null];
    }
}

if (!function_exists('split_birth')) {
    /**
     * 誕生日の分解
     *
     * @param string $birth_date
     * @return array
     */
    function split_birth(?string $birth_date): array
    {
        if ($birth_date) {
            $birth_array = explode('-', $birth_date);
            return [
                'birth_year' => $birth_array[0],
                'birth_month' => $birth_array[1],
                'birth_day' => $birth_array[2],
            ];
        }
        return ['birth_year' => null, 'birth_month' => null, 'birth_day' => null];
    }
}

if (!function_exists('combine_tel')) {
    /**
     * 電話番号の結合
     *
     * @param string $tel1
     * @param string $tel2
     * @param string $tel3
     * @return array
     */
    function combine_tel(?string $tel1, ?string $tel2, ?string $tel3): array
    {
        if ($tel1 && $tel2 && $tel3) {
            return ['tel' => $tel1 . $tel2 . $tel3];
        }
        return ['tel' => null];
    }
}

if (!function_exists('split_tel')) {
    /**
     * 電話番号の分解
     *
     * @param string $tel
     * @return array
     */
    function split_tel(?string $tel): array
    {
        if ($tel) {
            return [
                'tel1' => substr($tel, 0, 3),
                'tel2' => substr($tel, 3, 4),
                'tel3' => substr($tel, -4),
            ];
        }
        return ['tel1' => null, 'tel2' => null, 'tel3' => null];
    }
}

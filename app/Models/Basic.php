<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Basic extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'company_name',
        'company_kana',
        'zip_code',
        'address1',
        'address2',
        'tel1',
        'tel2',
        'email1',
        'email2',
        'shop_name',
        'shop_kana',
        'shop_message',
    ];
}

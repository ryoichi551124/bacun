<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Shipping extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'order_id',
        'user_id',
        'shipping_last_name',
        'shipping_first_name',
        'shipping_last_kana',
        'shipping_first_kana',
        'shipping_zip_code',
        'shipping_pref',
        'shipping_city',
        'shipping_address',
        'shipping_building',
        'shipping_tel',
        'shipping_email',
        'shipping_date',
        'shipping_memo',
        'tracking_number',
    ];

    /**
     * 配送先の受注
     *
     * @return HasOne
     */
    public function order(): HasOne
    {
        return $this->hasOne(Order::class);
    }

    /**
     * 配送先のユーザー
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

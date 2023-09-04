<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Order extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'shipping_id',
        'order_last_name',
        'order_first_name',
        'order_last_kana',
        'order_first_kana',
        'order_zip_code',
        'order_pref',
        'order_city',
        'order_address',
        'order_building',
        'order_tel',
        'order_email',
        'order_sex',
        'order_memo',
        'order_status',
        'tracking_number',
        'subtotal',
        'total_deliv_fee',
        'tax',
        'total',
        'payment_method',
        'payment_date',
    ];

    /**
     * 受注の詳細
     *
     * @return HasMany
     */
    public function order_details(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }

    /**
     * 受注の配送先
     *
     * @return HasOne
     */
    public function shipping(): HasOne
    {
        return $this->hasOne(Shipping::class);
    }

    /**
     * 受注のメール履歴
     *
     * @return HasMany
     */
    public function mail_history(): HasMany
    {
        return $this->hasMany(MailHistory::class);
    }

    /**
     * 受注のメールログ
     *
     * @return HasMany
     */
    public function mail_logs(): HasMany
    {
        return $this->hasMany(MailLog::class);
    }

    /**
     * 受注ユーザー
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    /**
     * IDによるスコープ
     *
     * @param Builder $query
     * @param integer|null $id
     * @return void
     */
    public function scopdId(Builder $query, int $id = null): void
    {
        if (empty($id)) return;
        $query->where('id', $id);
    }
}

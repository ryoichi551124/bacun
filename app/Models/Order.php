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
        'last_name',
        'first_name',
        'last_kana',
        'first_kana',
        'zip_code',
        'pref',
        'city',
        'address',
        'building',
        'tel',
        'email',
        'sex',
        'memo',
        'status',
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
    public function orderDetails(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }

    /**
     * 受注の配送先
     *
     * @return HasOne
     */
    public function orderShipping(): HasOne
    {
        return $this->hasOne(OrderShipping::class);
    }

    /**
     * 受注のメール履歴
     *
     * @return HasMany
     */
    public function mailHistory(): HasMany
    {
        return $this->hasMany(MailHistory::class);
    }

    /**
     * 受注のメールログ
     *
     * @return HasMany
     */
    public function mailLogs(): HasMany
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

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderShipping extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'order_id',
        'last_name',
        'first_name',
        'last_kana',
        'first_kana',
        'zip_code',
        'pref',
        'city',
        'address',
        'building',
        'memo',
    ];

    /**
     * 受注配送先の顧客
     *
     * @return BelongsTo
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(OrderShipping::class);
    }

    /**
     * IDによるスコープ
     *
     * @param Builder $query
     * @param integer|null $id
     * @return void
     */
    public function scopeId(Builder $query, int $id = null): void
    {
        if (empty($id)) return;
        $query->where('id', $id);
    }
}

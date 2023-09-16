<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
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
        'memo',
    ];

    /**
     * 配送先の顧客
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
    public function scopeId(Builder $query, int $id = null): void
    {
        $query->where('id', $id);
    }
}

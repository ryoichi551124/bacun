<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Delivery extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'duration',
        'delivery_fee1',
        'delivery_fee2',
        'category',
        'rank',
    ];

    /**
     * 送料情報の商品
     *
     * @return HasMany
     */
    public function products(): HasMany
    {
        return $this->hasMany(Delivery::class);
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

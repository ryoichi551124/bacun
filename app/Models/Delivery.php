<?php

namespace App\Models;

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
        'deliv_fee1',
        'deliv_fee2',
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
}

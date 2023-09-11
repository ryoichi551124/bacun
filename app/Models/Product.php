<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'category_id',
        'name',
        'main_img',
        'thumbnail',
        'sub_img1',
        'sub_img2',
        'sub_img3',
        'sub_img4',
        'content1',
        'content2',
        'content3',
        'content4',
        'memo',
        'stock',
        'type',
        'status',
        'tag',
        'rank',
        'regular_price',
        'sales_price',
        'delivery_id',
    ];

    /**
     * 商品が入っているカート詳細
     *
     * @return HasMany
     */
    public function cartItems(): HasMany
    {
        return $this->hasMany(CartItem::class);
    }

    /**
     * 商品が購入された受注詳細
     *
     * @return HasMany
     */
    public function orderDetails(): HasMany
    {
        return $this->hasMany(OrderDetail::class);
    }

    /**
     * 商品のカテゴリー
     *
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * 商品の送料情報
     *
     * @return HasOne
     */
    public function delivery(): HasOne
    {
        return $this->hasOne(Delivery::class);
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

    /**
     * カテゴリーIDによる検索
     *
     * @param Builder $query
     * @param integer|null $category_id
     * @return void
     */
    public function scopeCategoryId(Builder $query, int $category_id = null): void
    {
        $query->where('category_id', $category_id);
    }
}

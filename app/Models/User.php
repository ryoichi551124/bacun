<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'email',
        'password',
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
        'sex',
        'birth_date',
        'memo',
        'status',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    /**
     * ユーザーのカート
     *
     * @return HasOne
     */
    public function cart(): HasOne
    {
        return $this->hasOne(Cart::class);
    }

    /**
     * ユーザーの受注
     *
     * @return HasMany
     */
    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    /**
     * ユーザーの配送先
     *
     * @return HasMany
     */
    public function shippings(): HasMany
    {
        return $this->hasMany(Shipping::class);
    }

    /**
     * ユーザーのメール履歴
     *
     * @return HasMany
     */
    public function mailHistories(): HasMany
    {
        return $this->hasMany(MailHistory::class);
    }

    /**
     * ユーザーのメールログ
     *
     * @return HasMany
     */
    public function mailLogs(): HasMany
    {
        return $this->hasMany(MailLog::class);
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

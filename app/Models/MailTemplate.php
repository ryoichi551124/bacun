<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class MailTemplate extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'subject',
        'body',
        'from_name',
        'from_address',
        'reply_to_name',
        'repley_to_address',
        'cc_address',
        'bcc_address',
    ];

    /**
     * メールテンプレートのメール履歴
     *
     * @return HasMany
     */
    public function mail_histories(): HasMany
    {
        return $this->hasMany(MailHistory::class);
    }

    /**
     * メールテンプレートのメールログ
     *
     * @return HasMany
     */
    public function mail_logs(): HasMany
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
        if (empty($id)) return;
        $query->where('id', $id);
    }
}

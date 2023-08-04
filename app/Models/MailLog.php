<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class MailLog extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'mail_template_id',
        'user_id',
        'order_id',
        'from_address',
        'to_address',
        'cc_address',
        'bcc_address',
        'subject',
        'body',
    ];

    /**
     * メールログのメールテンプレート
     *
     * @return BelongsTo
     */
    public function mail_template(): BelongsTo
    {
        return $this->belongsTo(MailTemplate::class);
    }

    /**
     * メールログの受注先
     *
     * @return BelongsTo
     */
    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    /**
     * メールログのユーザー
     *
     * @return BelongsTo
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

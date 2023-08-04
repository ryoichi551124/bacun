<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mail_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('mail_template_id')->constrained()->nullable()->comment('メールテンプレートID');
            $table->foreignId('user_id')->constrained()->nullable()->comment('ユーザーID');
            $table->foreignId('order_id')->constrained()->nullable()->comment('オーダーID');
            $table->string('from_address', 128)->comment('差出人メールアドレス');
            $table->string('to_address', 128)->comment('送信先メールアドレス');
            $table->string('cc_address')->nullable()->comment('CCアドレス');
            $table->string('bcc_address')->nullable()->comment('BCCアドレス');
            $table->string('subject', 128)->comment('件名');
            $table->text('body')->comment('メール本文');
            $table->timestamps();

            $table->index('mail_template_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mail_logs');
    }
};

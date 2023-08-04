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
        Schema::create('mail_histories', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->nullable()->comment('オーダーID');
            $table->foreignId('mail_template_id')->constrained()->nullable()->comment('メールテンプレートID');
            $table->date('send_date')->nullable()->comment('送信日時');
            $table->string('mail_subject', 128)->comment('メール件名');
            $table->text('mail_body')->comment('メール本文');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mail_histories');
    }
};

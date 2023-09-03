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
        Schema::create('mail_templates', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64)->comment('テンプレート名');
            $table->string('subject', 128)->comment('メール件名');
            $table->text('body')->comment('メール本文');
            $table->string('from_name', 64)->comment('差出人名');
            $table->string('from_address', 128)->comment('差出人メールアドレス');
            $table->string('reply_to_name', 64)->nullable()->comment('返信先名');
            $table->string('reply_to_address', 128)->nullable()->comment('返信先メールアドレス');
            $table->string('cc_address')->nullable()->comment('CCアドレス');
            $table->string('bcc_address')->nullable()->comment('BCCアドレス');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mail_templates');
    }
};

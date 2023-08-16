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
        Schema::create('basics', function (Blueprint $table) {
            $table->id();
            // 会社情報
            $table->string('company_name', 128)->nullable()->comment('会社名');
            $table->string('company_kana', 128)->nullable()->comment('会社名カナ');
            $table->string('zip_code1', 8)->nullable()->comment('郵便番号1');
            $table->string('zip_code2', 8)->nullable()->comment('郵便番号2');
            $table->string('address1', 256)->nullable()->comment('住所1');
            $table->string('address2', 256)->nullable()->comment('住所2');
            $table->string('tel1', 20)->nullable()->comment('電話番号1');
            $table->string('tel2', 20)->nullable()->comment('電話番号2');
            $table->string('email1', 128)->nullable()->comment('メールアドレス1');
            $table->string('email2', 128)->nullable()->comment('メールアドレス2');
            // ショップ情報
            $table->string('shop_name', 128)->nullable()->comment('ショップ名');
            $table->string('shop_kana', 128)->nullable()->comment('ショップ名カナ');
            $table->text('shop_message')->nullable()->comment('ショップメッセージ');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('basics');
    }
};

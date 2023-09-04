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
        Schema::create('shippings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('ユーザーID');
            // 配送先情報
            $table->string('shipping_last_name', 64)->comment('姓');
            $table->string('shipping_first_name', 64)->comment('名');
            $table->string('shipping_last_kana', 64)->comment('姓カナ');
            $table->string('shipping_first_kana', 64)->comment('名カナ');
            $table->string('shipping_zip_code', 8)->comment('郵便番号');
            $table->string('shipping_pref', 8)->comment('都道府県');
            $table->string('shipping_city', 32)->comment('市区町村');
            $table->string('shipping_address', 128)->comment('丁目番地号');
            $table->string('shipping_building', 128)->nullable()->comment('建物名');
            $table->string('shipping_tel', 20)->nullable()->comment('電話番号');
            $table->string('shipping_email', 128)->comment('メールアドレス');
            $table->text('shipping_memo')->nullable()->comment('配送メモ');
            $table->softDeletes();
            $table->timestamps();

            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shippings');
    }
};

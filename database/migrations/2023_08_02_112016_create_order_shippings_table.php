<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * 受注配送先
     */
    public function up(): void
    {
        Schema::create('order_shippings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade')->comment('オーダーID');
            // 受注配送先情報
            $table->string('last_name', 64)->comment('姓');
            $table->string('first_name', 64)->comment('名');
            $table->string('last_kana', 64)->comment('姓カナ');
            $table->string('first_kana', 64)->comment('名カナ');
            $table->string('zip_code', 8)->comment('郵便番号');
            $table->string('pref', 8)->comment('都道府県');
            $table->string('city', 32)->comment('市区町村');
            $table->string('address', 128)->comment('丁目番地号');
            $table->string('building', 128)->nullable()->comment('建物名');
            $table->text('memo')->nullable()->comment('配送メモ');
            $table->softDeletes();
            $table->timestamps();

            $table->index('order_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_shippings');
    }
};

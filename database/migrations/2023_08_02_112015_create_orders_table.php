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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('ユーザーID');
            // 注文者情報
            $table->string('order_last_name', 64)->comment('姓');
            $table->string('order_first_name', 64)->comment('名');
            $table->string('order_last_kana', 64)->comment('姓カナ');
            $table->string('order_first_kana', 64)->comment('名カナ');
            $table->string('order_zip_code', 8)->comment('郵便番号');
            $table->string('order_pref', 8)->comment('都道府県');
            $table->string('order_city', 32)->comment('市区町村');
            $table->string('order_address', 128)->comment('丁目番地号');
            $table->string('order_building', 128)->comment('建物名');
            $table->string('order_tel', 20)->comment('電話番号');
            $table->string('order_email', 128)->comment('メールアドレス');
            $table->enum('order_sex', [1, 2])->nullable()->comment('性別 [1 => "男性", 2 => "女性"]');
            $table->text('order_memo')->nullable()->comment('オーダーメモ');
            $table->unsignedTinyInteger('order_status')->comment('ステータス');
            // 料金
            $table->unsignedMediumInteger('subtotal')->comment('小計');
            $table->unsignedMediumInteger('total_deliv_fee')->comment('送料合計');
            $table->unsignedMediumInteger('tax')->comment('消費税');
            $table->unsignedMediumInteger('total')->comment('合計');
            // 支払い
            $table->string('payment_method', 64)->comment('支払い方法');
            $table->date('payment_date')->nullable()->comment('支払い日');

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
        Schema::dropIfExists('orders');
    }
};

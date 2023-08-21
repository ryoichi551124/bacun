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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('category_id')->nullable()->constrained()->comment('カテゴリーID');
            // 商品
            $table->string('name', 128)->comment('商品名');
            $table->string('thumbnail')->nullable()->comment('サムネイル画像');
            $table->string('main_img')->nullable()->comment('メイン画像');
            $table->string('sub_img1')->nullable()->comment('サブ画像1');
            $table->string('sub_img2')->nullable()->comment('サブ画像2');
            $table->string('sub_img3')->nullable()->comment('サブ画像3');
            $table->string('sub_img4')->nullable()->comment('サブ画像4');
            $table->text('content1')->nullbale()->comment('商品説明1');
            $table->text('content2')->nullbale()->comment('商品説明2');
            $table->text('content3')->nullbale()->comment('商品説明3');
            $table->text('content4')->nullbale()->comment('商品説明4');
            $table->text('memo')->nullable()->comment('メモ');
            $table->unsignedTinyInteger('stock')->comment('在庫数');
            $table->enum('type', [1, 2])->default(1)->comment('商品タイプ [1 => "物理商品", 2 => "ダウンロード商品"]');
            $table->enum('status', [0, 1])->comment('ステータス [0 => "非公開", 1 => "公開"]');
            $table->unsignedTinyInteger('tag')->nullable()->comment('タグ ["新商品", "おすすめ商品", "限定品", etc...]');
            $table->unsignedMediumInteger('rank')->nullable()->rank()->comment('並び順');
            // 料金
            $table->unsignedMediumInteger('regular_price')->comment('通常料金');
            $table->unsignedMediumInteger('sales_price')->comment('販売料金');
            $table->foreignId('delivery_id')->constrained()->comment('送料ID');
            $table->timestamps();

            $table->index('category_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};

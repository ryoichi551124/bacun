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
        Schema::create('cart_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('cart_id')->constrained()->onDelete('cascade')->comment('カートID');
            $table->foreignId('product_id')->constrained()->onDelete('cascade')->comment('商品ID');
            $table->string('product_name', 128)->comment('商品名');
            $table->unsignedMediumInteger('price')->comment('料金');
            $table->unsignedTinyInteger('quantity')->comment('数量');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cart_items');
    }
};

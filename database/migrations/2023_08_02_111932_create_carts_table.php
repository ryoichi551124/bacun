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
        Schema::create('carts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade')->comment('ユーザーID');
            $table->uuid('cart_key')->comment('カートキーUUID');
            $table->unsignedMediumInteger('total_price')->comment('合計料金');
            $table->unsignedTinyInteger('total_quantity')->comment('合計数量');
            $table->unsignedMediumInteger('total_deliv_fee')->comment('合計送料');
            $table->timestamps();

            $table->index('user_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carts');
    }
};

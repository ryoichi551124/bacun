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
        Schema::create('deliveries', function (Blueprint $table) {
            $table->id();
            $table->string('name', 64)->comment('送料名');
            $table->text('description')->nullable()->comment('送料説明');
            $table->string('duration')->nullable()->comment('配送日数');
            $table->unsignedTinyInteger('deliv_fee1')->comment('送料');
            $table->unsignedTinyInteger('deliv_fee2')->comment('沖縄・離島料金');
            $table->unsignedTinyInteger('division')->nullable()->comment('配送区分');
            $table->unsignedTinyInteger('rank')->nullable()->comment('並び順');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('deliveries');
    }
};

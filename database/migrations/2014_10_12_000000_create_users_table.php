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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('email', 128)->unique()->comment('メールアドレス');
            $table->timestamp('email_verified_at')->nullable()->comment('メール検証日時');
            $table->string('password', 64)->comment('パスワード');
            $table->string('last_name', 64)->comment('姓');
            $table->string('first_name', 64)->comment('名');
            $table->string('last_kana', 64)->comment('姓カナ');
            $table->string('first_kana', 64)->comment('名カナ');
            $table->string('zip_code', 8)->comment('郵便番号');
            $table->string('pref', 8)->comment('都道府県');
            $table->string('city', 32)->comment('市区町村');
            $table->string('address', 128)->comment('丁目番地号');
            $table->string('building', 128)->comment('建物名');
            $table->string('tel', 20)->comment('電話番号');
            $table->enum('sex', [1, 2])->nullable()->comment('性別 [1 => "男性", 2 => "女性"]');
            $table->date('birth_date')->nullable()->comment('生年月日');
            $table->text('memo')->nullable()->comment('メモ');
            $table->enum('status', [0, 1, 2])->comment('ステータス [0 => "非会員", 1 => "本会員", 2 => "仮会員"]');
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();

            $table->index('email');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

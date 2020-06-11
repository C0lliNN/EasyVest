<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateListUserTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('list_user', function (Blueprint $table) {
            $table->id();
            $table->enum('relation', ['answer', 'owner', 'bookmark']);
            $table->foreignId('user_id')->constrained();
            $table->foreignId('list_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('list_user');
    }
}

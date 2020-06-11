<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateQuestionsTable extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->string('tags')->nullable();
            $table->text('alternativeA');
            $table->text('alternativeB');
            $table->text('alternativeC');
            $table->text('alternativeD');
            $table->text('alternativeE')->nullable();
            $table->enum('correctAlternative', ['a', 'b', 'c', 'd', 'e']);
            $table->foreignId('subject_id')->constrained();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() {
        Schema::dropIfExists('questions');
    }
}

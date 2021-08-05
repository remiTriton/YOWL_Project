<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Comments extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('content');
            $table->integer('amazon_id')->nullable();
            $table->integer('wallmart_id')->nullable();
            $table->integer('target_id')->nullable();
            $table->integer('like');

            
        });
        Schema::table('comments', function (Blueprint $table) {
            $table->foreignId('user_id')->constrained();
        });
    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
       //
    }
}

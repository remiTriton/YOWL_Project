<?php
  
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
  
use App\Http\Controllers\API\RegisterController;
use App\Http\Controllers\API\CommentController;
  
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
  
Route::post('register', [RegisterController::class, 'register']);
Route::post('login', [RegisterController::class, 'login']);

Route::middleware('auth:api')->group( function () {


    Route::post('comment', [CommentController::class, 'store']);
    Route::resource('comments', CommentController::class);

    Route::delete('/comment/{comment_id}', [CommentController::class, 'delete']);
    Route::delete('/comment/{comment_id}/admin', [CommentController::class, 'deleteCrud']);
    Route::delete('/register/{user_id}/delete', [RegisterController::class, 'delete']);

    Route::put('/comment/{comment_id}/admin',[CommentController::class,'updateCrud']);
    Route::put('/comment/{comment_id}',[CommentController::class,'update']);
    Route::put('/register/{id}/put',[RegisterController::class,'update']);
    Route::put('/register/{id}/profile',[RegisterController::class,'updateProfile']);
    
    Route::get('/register',[RegisterController::class,'getAllUsers']);
});
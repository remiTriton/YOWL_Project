<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\Comment;
use Validator;
use App\Http\Resources\Comment as CommentResource;
use Auth;

class CommentController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $comments = Comment::all();
    
        return $this->sendResponse(CommentResource::collection($comments), 'Comments retrieved successfully.');
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {   
        $input = $request->all();
        $validator = Validator::make($input, [
            'content' => 'required'
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $comment = Comment::create([
            'content' => $input['content'],
            'wallmart_id'=> $request['wallmart_id'],
            'amazon_id'=> $request['amazon_id'],
            'user_id' => Auth::user()->id,
        ]);
   
        return $this->sendResponse(new CommentResource($comment), 'Comment created successfully.');
    } 
   
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $comment = Comment::find($id);
  
        if (is_null($comment)) {
            return $this->sendError('Comment not found.');
        }
   
        return $this->sendResponse(new CommentResource($comment), 'Comment retrieved successfully.');
    }
    
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function updateCrud($comment_id, Request $request)
    {
        $comment=Comment::findOrFail($comment_id);
            $validator = Validator::make($request->all(),[
                'content'=>'required'
            ]);
            
            if($validator->fails()){
                return response()->json([
                    'message'=>'validation failed',
                    'errors'=>$validator->errors()
                ],422);
            }
            $comment->update([
                'content'=>$request->content
            ]);
            return response()->json([
                'message'=>'comment successfully updated',
                'data'=>$comment                
            ],200);
        
   
    }
    public function update($comment_id, Request $request)
    {
        $comment=Comment::findOrFail($comment_id);
        if($comment->user_id==$request->user()->id){
            $validator = Validator::make($request->all(),[
                'content'=>'required'
            ]);
            
            if($validator->fails()){
                return response()->json([
                    'message'=>'validation failed',
                    'errors'=>$validator->errors()
                ],422);
            }
            $comment->update([
                'content'=>$request->content
            ]);
            return response()->json([
                'message'=>'comment successfully updated',
                'data'=>$comment                
            ],200);
        }
   
    }
   
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Comment $comment)
    {
        $comment->delete();
   
        return $this->sendResponse([], 'Comment deleted successfully.');
    }

    public function delete($comment_id, Request $request)
    {
        $comment= Comment::where('id', $comment_id)->first();
        if($comment){
            if($comment->user_id==$request->user()->id){
                $comment->delete();
                return response()->json([
                    'message'=>'Comments deleted successfully'
                ],200);
            }
        }
    }

    public function deleteCrud($comment_id, Request $request)
    {
        $comment= Comment::where('id', $comment_id)->first();
        if($comment){
                $comment->delete();
                return response()->json([
                    'message'=>'Comments deleted successfully'
                ],200); 
        }
    }
}
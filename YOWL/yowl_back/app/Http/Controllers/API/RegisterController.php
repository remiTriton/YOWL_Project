<?php
   
namespace App\Http\Controllers\API;
   
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Validator;
   
class RegisterController extends BaseController
{
    /**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            'c_password' => 'required|same:password',
        ]);
   
        if($validator->fails()){
            return $this->sendError('Validation Error.', $validator->errors());       
        }
   
        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $success['token'] =  $user->createToken('MyApp')->accessToken;
        $success['name'] =  $user->name;
   
        return $this->sendResponse($success, 'User register successfully.');
    }
   
    /**
     * Login api
     *
     * @return \Illuminate\Http\Response
     */
    public function login(Request $request)
    {
        if(Auth::attempt(['email' => $request->email, 'password' => $request->password])){ 
            $user = Auth::user(); 
            $success['token'] =  $user->createToken('MyApp')-> accessToken; 
            $success['name'] =  $user->name;
   
            return $this->sendResponse($success, 'User login successfully.');
        } 
        else{ 
            return $this->sendError('Unauthorised.', ['error'=>'Unauthorised']);
        } 
    }
    public function delete($id, Request $request)
    {
       
        $user= User::find ($id);
                $user->delete();
                return response()->json([
                    'message'=>'User deleted successfully'
                ],200);
            
        
    }
    public function update(Request $request, $id)
    {
       if($id)
       {
           $name = $request->name;
           $email = $request->email;
           $password = bcrypt($request->password);
           $c_password = $request->c_passord;

           $user= User::findOrFail($id);
           $user->name = $name;
           $user->email = $email;
           $user->password = $password;
           $user->save();

           $results = [
               "data"=> $user,
               "code"=> 200,
               "message"=> "User update successfully"
           ];
           return response()->json($request);
       }
    }

    public function updateProfile(Request $request, $id)
    {

        if($id)
        {
            if ($id==$request->user()->id){
            $name = $request->name;
            $email = $request->email;
            $password = bcrypt($request->password);
            $c_password = $request->c_passord;
 
            $user= User::findOrFail($id);
            $user->name = $name;
            $user->email = $email;
            $user->password = $password;
            $user->save();
 
            $results = [
                "data"=> $user,
                "code"=> 200,
                "message"=> "User update successfully"
            ];
            return response()->json($request);
    }}
}
    public function getAllUsers() {
        $users = User::get()->toJson(JSON_PRETTY_PRINT);
        return response($users, 200);
      }
    
}
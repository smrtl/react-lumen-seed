<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Get the authenticated User.
     *
     * @return Response
     */
    public function profile()
    {
        return response()->json(['user' => Auth::user()], 200);
    }

    /**
     * Get all User.
     *
     * @return Response
     */
    public function allUsers()
    {
        return response()->json(['users' =>  User::all()], 200);
    }

    /**
     * Get one user.
     *
     * @return Response
     */
    public function user($id)
    {
        try {
            $user = User::findOrFail($id);
            return response()->json(['user' => $user], 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'user not found!'], 404);
        }
    }
}

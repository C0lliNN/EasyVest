<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateProfileRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\User;

class UsersController extends Controller {
    public function myProfile() {
        return view('profile')->with('user', Auth::user());
    }

    public function showProfile(User $user) {
        if ($user->id === Auth::id()) {
            return redirect(route('my-profile'));
        }

        return view('profile')->with('user', $user);
    }

    public function update(UpdateProfileRequest $request) {
        $user = User::findOrFail(Auth::id());

        $user->name = $request->name;
        $user->email = $request->email;
        $user->description = $request->description;

        if ($request->image) {
            $user->deleteProfilePicture();
            $url = $request->image->store('profiles');
            $user->image = "/storage/{$url}";
        }

        if ($request->password) {
            if ($request->password === $request->confirmPassword) {
                $user->password = Hash::make($request->password);
            } else {
                session()->flash('alert', [
                    'danger',
                    'As senhas não coincidem'
                ]);
                return redirect()->back();
            }
        }

        $user->save();

        session()->flash('alert', ['success', 'Perfil atualizado com sucesso']);

        return redirect()->back();
    }
}

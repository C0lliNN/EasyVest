@extends('layouts.app')

@section('title')
EasyVest - Login
@endsection

@section('styles')
<link rel="stylesheet" href="{{ asset('css/form.css') }}">
@endsection

@section('content')
<div class="container">
    <div class="row">
        <div class="col s12 m8 offset-m0 offset-m2">
            <div class="card form">
                <h2>Login</h2>

                <div class="card-content">
                    <form method="POST" action="{{ route('login') }}">
                        @csrf

                        <div class="row">

                            <div class="input-field col s12">
                                <i class="material-icons prefix active">email</i>
                                <input id="email" type="email" class="@error('email') is-invalid @enderror" name="email"
                                    value="{{ old('email') }}" required autocomplete="email" autofocus>
                                <label for="email">Email</label>
                            </div>

                            @error('email')
                            <span class="invalid-feedback red-text" role="alert">
                                <strong>{{ $message }}</strong>
                            </span>
                            @enderror

                        </div>

                        <div class="row">

                            <div class="input-field col s12">
                                <i class="material-icons prefix">lock</i>
                                <input id="password" type="password" class="@error('password') is-invalid @enderror"
                                    name="password" required autocomplete="current-password">
                                <label for="password">Senha</label>
                            </div>

                            <div>
                                @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror
                            </div>
                        </div>

                        <div class="row">

                            <label>
                                <input type="checkbox" class="filled-in blue-box" />
                                <span>Mantenha-me conectado</span>
                            </label>

                        </div>

                        <div class="row center">
                            <button type="submit" class="btn btn-blue">
                                Login
                            </button>
                        </div>

                    </form>
                    <div class="row">
                        @if (Route::has('password.request'))
                        <a href="{{ route('password.request') }}">
                            Esqueceu sua Senha
                        </a>
                        @endif
                    </div>
                    <div class="row">

                        <a href="{{ route('register') }}">
                            Criar Conta
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
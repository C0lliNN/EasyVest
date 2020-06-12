@extends('layouts.app')

@section('title')
EasyVest - {{ $user->name }}
@endsection

@section('styles')
<link rel="stylesheet" href="{{ asset('css/profile.css') }}">
@endsection

@section('content')

@if (session()->has('alert'))

<div class="alert alert-{{session('alert')[0]}} container">
    {{ session('alert')[1] }}
</div>

@endif
@if ($errors->any())

@foreach ($errors->all() as $error)
<div class="alert alert-danger container">{{$error}}</div>
@endforeach

@endif

<section class="container" id="profile">
    @if ($user->id === Auth::id())
    <h2>Perfil</h2>
    @endif
    <form action="{{ route('my-profile.update') }}" method="POST" enctype="multipart/form-data">
        @csrf
        @method('PUT')
        <div class="row center valign-wrapper">

            <div class="img-container col s3 center">
                @if ($user->image)
                <img src="{{ asset($user->image) }}" alt="{{ $user->name }}">
                @else
                <i class="material-icons">account_circle</i>
                @endif
                @if($user->id === Auth::id())
                <label class="btn btn-blue z-depth-0" for="file-input">Mudar Foto</label>
                <input type="file" id="file-input" name="image">
                @endif
            </div>
            <div class="col s9">
                @if ($user->id === Auth::id())
                <div class="input-field">
                    <input id="name" type="text" value="{{ $user->name }}" name="name">
                    <label for="name">Nome</label>
                </div>
                <div class="input-field">
                    <input id="email" type="text" value="{{ $user->email }}" name="email">
                    <label for="email">Email</label>
                </div>
                <div class="input-field">
                    <input id="password" type="password" name="password">
                    <label for="password">Senha</label>
                </div>
                <div class="input-field">
                    <input id="confirm-password" type="password" name="confirmPassword">
                    <label for="confirm-password">Confirmar Senha</label>
                </div>
                <div class="input-field">
                    <textarea id="description" class="materialize-textarea"
                        name="description">{{ $user->description }}</textarea>
                    <label for="description">Descrição</label>
                </div>
                <button class="btn btn-green z-depth-0" type="submit">Salvar</button>
                @else
                <h3 class="name">{{ $user->name }}</h3>
                <p class="description">
                    @if($user->description)
                    {{ $user->description }}
                    @else
                    Sem Descrição
                    @endif
                </p>

                @endif
            </div>
        </div>

    </form>
</section>
@endsection

@section('scripts')

<script>
    const input = document.querySelector('#file-input');

        input.onchange = (event) => {
            let fileName = null;

            if (input.files.length) {
                fileName = input.files[0].name;
            }

            const label = input.labels[0];

            if (fileName) {
                label.innerHTML = fileName.substring(0, 15);


            } else {
                label.innerHTML = 'Mudar Foto';
            }
        }
</script>

@endsection
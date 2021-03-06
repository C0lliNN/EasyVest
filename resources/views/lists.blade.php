@extends('layouts.app')

@section('title')
EasyVest – Listas
@endsection

@section('styles')
<link rel="stylesheet" href="{{ asset('css/header.css') }}">
@endsection

@section('content')
<input type="hidden" value="{{ Auth::user()->api_token }}" id="api_token" />

<div id="modal" class="modal">
    <div class="modal-content">
        <h4></h4>
        <p></p>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-close waves-effect waves-green btn-flat">
            Ok
        </a>
    </div>
</div>
<div id="react-root"></div>
@endsection

@section('scripts')
<script src="{{ asset('js/index.js') }}"></script>
@endsection
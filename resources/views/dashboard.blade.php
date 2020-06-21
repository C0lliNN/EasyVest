@extends('layouts.app')

@section('title')
EasyVest – Dashboard
@endsection

@section('styles')
<link rel="stylesheet" href="{{ asset('css/dashboard.css') }}">
@endsection

@section('content')

<section class="container dashboard">
    <div class="row">
        <h2>Bem-Vindo, {{ Auth::user()->name }}</h2>
    </div>
    <div class="row">
        <div class="col s12 m6">
            <h3 class="header">Questões</h3>
            <div class="card medium horizontal">
                <div class="icon-container valign-wrapper">
                    <i class="material-icons large">assignment</i>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p><strong>Número total de Questões:</strong> {{ $totalQuestions }}</p>
                        <p><strong>Minhas Questões:</strong> {{ $totalMyQuestions }}</p>
                        <p><strong>Meus Favoritos:</strong> {{ $totalQuestionsBookmarks }}</p>
                    </div>
                    <div class="card-action">
                        <a href="{{ route('questions') }}">Visualizar</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col s12 m6">
            <h3 class="header">Listas</h3>
            <div class="card medium horizontal">
                <div class="icon-container valign-wrapper">
                    <i class="material-icons large">view_list</i>
                </div>
                <div class="card-stacked">
                    <div class="card-content">
                        <p><strong>Número total de Listas:</strong> {{ $totalLists }}</p>
                        <p><strong>Minhas Listas:</strong> {{ $totalMyLists }}</p>
                        <p><strong>Meus Favoritos:</strong> {{ $totalListsBookmarks }}</p>
                    </div>
                    <div class="card-action">
                        <a href="{{ route('lists') }}">Visualizar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

@endsection
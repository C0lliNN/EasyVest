@extends('layouts.app')

@section('title')
EasyVest – Dashboard
@endsection

@section('styles')
<link rel="stylesheet" href="{{ asset('css/header.css') }}">
@endsection

@section('content')
<h2>Welcome, {{ auth()->user()->name }}</h2>
@endsection
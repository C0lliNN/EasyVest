@extends('layouts.app')

@section('content')
<section class="main-content">
    <div class="container">
        <div class="row valign-wrapper">
            <div
                class="col s12 m6 l-7 push-m6 push-l5"
            >
                <!-- Image -->
                <figure>
                    <img
                        alt="Image placeholder"
                        src="{{ asset('img/main-illustration.svg') }}"
                        class="responsive-img"
                    />
                </figure>
            </div>
            <div class="col s12 m6 l5 pull-m6 pull-l7">
                <!-- Heading -->
                <h1 class="display-4 text-center">
                    Estude, Crie e Compartilhe
                    <strong>Questões e Listas</strong
                    >
                </h1>
                <!-- Text -->
                <p class="text-center ">
                    Venha estudar para vestibulares e ENEM seguindo a melhor metodologia de estudos:
                    <strong style="font-weight: bold">Exercícios.</strong>
                </p>
                <!-- Buttons -->
                <div class="text-center">
                    <a
                        href="{{ route('register') }}"
                        class="btn btn-primary btn-large z-depth-0"
                    >
                        <span class="btn-inner--text">Cadastrar</span>
                        <span class="btn-inner--icon"
                            ><i data-feather="chevron-right"></i
                        ></span>
                    </a>
                    <a
                        href="{{ route('login') }}"
                        class="btn-flat btn-large"
                        target="_blank" 
                        >Login</a
                    >
                </div>
            </div>
        </div>
    </div>
</section>
<section id="utilidade" class="">
    <div class="badge">
        Introdução
    </div>
    <div class="header">

        <h2>
            Plataforma útil a todos
        </h2>
        <div>
            <p>
                Veja como a EasyVest você pode ajudar você.
            </p>
        </div>
    </div>
    <div class="container">

        <div class="row">

            <div class="col m4">
                <div class="card z-depth-1">
                    <div class="card-image">
                        <img
                            src="{{ asset('img/student-illustration.svg') }}"
                            class="img-fluid img-center"
                            style="height: 150px;"
                            alt="Illustration"
                        />
                    </div>
                    <div class="card-content pb-5">
                        <h5 class="h4 lh-130 mb-3">
                            Increase your audience
                        </h5>
                        <p class="text-muted mb-0">
                            Quick Website UI Kit (FREE) contains
                            components and pages that are easy to
                            customize and change.
                        </p>
                    </div>
                </div>
            </div>


                <div class="col m4">
                    <div class="card">
                        <div class="card-image">
                            <img
                                src="{{ asset('img/teacher-illustration.svg') }}"
                                class="img-fluid img-center"
                                style="height: 150px;"
                                alt="Illustration"
                            />
                        </div>
                        <div class="card-content">
                            <h5 class="h4 lh-130 mb-3">
                                Unleash you creativity
                            </h5>
                            <p class="text-muted mb-0">
                                Quick Website UI Kit (FREE) contains
                                components and pages that are easy to
                                customize and change.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col m4">
                    <div class="card">
                        <div class="card-image">
                            <img
                                src="{{ asset('img/school-illustration.svg') }}"
                                class="img-fluid img-center"
                                style="height: 150px;"
                                alt="Illustration"
                            />
                        </div>
                        <div class="card-content">
                            <h5 class="h4 lh-130 mb-3">Get more results</h5>
                            <p class="text-muted mb-0">
                                Quick Website UI Kit (FREE) contains
                                components and pages that are easy to
                                customize and change.
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</section>
@include('partials.footer')
@endsection



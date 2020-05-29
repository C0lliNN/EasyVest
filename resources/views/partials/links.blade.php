@auth
    <li>
        <a href="{{ route('questions.index') }}">
            Questões
        </a>
    </li>
    <li>
        <a href="{{ route('lists.index') }}">
            Listas
        </a>
    </li>
    <li>
        <a href="#">
            Perfil
        </a>
    </li>
    <li>
        <form action="{{ route('logout') }}" method="POST">
            @csrf
            <button type="submit" class="btn btn-danger z-depth-0">
                Logout
            </button>
        </form>
    </li>
@else
    <li>
        <a href="{{ route('login') }}">Login</a>
    </li>
    <li>
        <a class="btn btn-primary z-depth-0" href="{{ route('register') }}">
            Cadastrar
        </a>
    </li>
@endauth

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <meta name="description" content="" />
  <meta name="author" content="Webpixels" />
  <title>@yield('title')</title>

  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

  <!-- Custom CSS -->
  @yield('styles')

  <!-- Icons -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- Compiled and minified JavaScript -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Mali&family=Open+Sans&display=swap" rel="stylesheet">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
</head>

<body>

  <!-- Navbar -->


  <nav class="main-nav white z-depth-0">
    <div class="nav-wrapper container">
      <a href="{{ route('home') }}" class="brand-logo left">
        <span>Easy</span>Vest.
      </a>
      <a href="#!" data-target="side-nav" class="sidenav-trigger right">
        <i class="material-icons">menu</i>
      </a>
      <ul class="right hide-on-med-and-down">

        @include('partials.links')

      </ul>
    </div>
  </nav>

  <div class="sidenav" id="side-nav">
    <h4>
      <a href="{{ route('home') }}" class="brand-logo">
        <span>Easy</span>Vest.
      </a>
    </h4>
    <ul>
      @include('partials.links')
    </ul>
  </div>


  @yield('content')
  <script>
    M.AutoInit();

            document.addEventListener('DOMContentLoaded', function() {
                const elements = document.querySelectorAll('.sidenav');
                var instances = M.Sidenav.init(elements, {
                    edge: 'right'
                });
            });
  </script>
  @yield('scripts')
</body>

</html>
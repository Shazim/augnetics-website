<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{config('app.name')}}</title>
        <link rel="stylesheet" href="{{ asset('public/assets/lib/slick/slick.css') }}">
        <link rel="stylesheet" href="{{ asset('public/assets/lib/aos/aos.css') }}">
        <link rel="stylesheet" href="{{ asset('public/assets/style.css') }}">
        <script src="{{ asset('public/assets/lib/jquery.min.js') }}"></script>
        <script src="{{ asset('public/assets/lib/slick/slick.min.js') }}"></script>
        <script src="{{ asset('public/assets/lib/slick/slick.min.js') }}"></script>
        <script src="{{ asset('public/assets/lib/aos/aos.js') }}"></script>
        <script src="{{ asset('public/assets/app.js') }}"></script>
        <script src="../../public/assets/three.min.js"></script>
        <script type="module" src="../../public/assets/OBJLoader.js"></script>
        <script type="module" src="../../public/assets/OrbitControls.js"></script>
        <script type="module" src="../../public/assets/3dcustom.js"></script>
    </head>
    <body>

    <header class="scroll">
        <div data-aos="zoom-in" data-aos-duration="1000" class="flex-center">
            <a href="/"><img src="{{ asset('public/assets/images/logo.png') }}" alt="logo"  /></a>
        </div>
    </header>

    <main>
        
        
      
        <section class="wrapper quizes" id="model-container">
            <h2>Select Color</h2>
            <input type="color" id="colorSelector" value="#ffffff">   
            <br>
            <br>
        </section>
       

    </main>
    
    </body>
</html>

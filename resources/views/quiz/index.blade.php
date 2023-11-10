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
    </head>
    <body>

    <header class="scroll">
        <div data-aos="zoom-in" data-aos-duration="1000" class="flex-center">
            <img src="{{ asset('public/assets/images/logo.png') }}" alt="logo"  />
        </div>
    </header>

    <main>
        
        
      
        <section class="wrapper quizes" id="quiz-container">
            <h3>Quizes</h3>
            <div class="quiz-container"  >
            <div>Biology Quiz</div>
            <div class="user-option" onclick="chooseQuiz('bio')">Start</div>
            </div>
            <div class="quiz-container" >
            <div>critical Thinking Quiz</div>
            <div class="user-option" onclick="chooseQuiz('criticalThinking')">Start</div>
            </div>
            <div class="quiz-container" >
            <div>English Quiz</div>
            <div class="user-option" onclick="chooseQuiz('english')">Start</div>
            </div>
            <div class="question" id="question"></div>
        <div class="choices" id="choices"></div>
        <button id="submit">Submit</button>
        <div class="result" id="result"></div>

        </section>
       

    </main>
    <!-- <footer>
        <div class="flex footer-container wrapper" >
            <div class="footer-left">
                <h4>FIND US</h4>
                <address>
                    <a href="https://www.google.com/maps/place/DIFC+Innovation+Hub/@25.2079151,55.2738852,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f439f688fe9ff:0x43c25d95a77e0b93!8m2!3d25.2079103!4d55.2764601!16s%2Fg%2F11nmmgl1fx?entry=ttu" target="_blank">
                        Dubai International Financial Centre Innovation Hub<br>
                        Dubai, United Arab Emirates
                    </a>
                </address>
            </div>
            <div class="footer-middle flex-center">
                <img src="{{ asset('public/assets/images/logo.png') }}" alt="logo" />
            </div>
            <div class="footer-right">
                <div class="footer-contact-us">
                    <h4>CONTACT US</h4>
                    <a href="mailto:reveal@augnetics.ai">reveal@augnetics.ai</a>
                    <div class="flex linked-in-links">
                        <a target="_blank" href="https://www.linkedin.com/in/yousuf-alghurair-54a582131?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="{{ asset('public/assets/images/linkedIn.png') }}"></a>
                        <a target="_blank" href="https://www.linkedin.com/in/omran-alblooshi-744a7123a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img src="{{ asset('public/assets/images/linkedIn.png') }}"></a>
                    </div>
                </div>
            </div>
        </div>
    </footer> -->
    </body>
</html>

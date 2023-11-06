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

    <header id="header" >
        <div data-aos="zoom-in" data-aos-duration="1000" class="flex-center">
            <img src="{{ asset('public/assets/images/logo.png') }}" alt="logo"  />
        </div>
    </header>

    <main>
        <section class="banner">
            <div class="banner-content">
                <h3 class="banner-title" data-aos="zoom-in" data-aos-duration="1000">
                    <span>**/// DIGITAL</span>
                    <span>SOLUTIONS</span>
                    <span>AGENCY</span>
                </h3>
                <h1 class="banner-heading">
                    <span data-aos="fade-right">we create solutions with</span>
                    <span data-aos="fade-left">immersive ar with a data </span>
                    <span data-aos="fade-right">solving purpose.</span>
                </h1>
                <h4 class="banner-based" data-aos="zoom-in" data-aos-duration="1000">
                    <span>***// BASED IN DUBAI</span>
                    <span>WORKING WORLDWIDE</span>
                </h4>

            </div>
        </section>
        <section class="about">
            <div class="flex">
                <div  class="about-content">
                    <div class="about-content-container">
                        <h3>
                            <span data-aos="fade-right" class="aos-init aos-animate">About</span>
                            <span data-aos="fade-left" class="aos-init aos-animate">AUGnetics</span>
                        </h3>
                        <p data-aos="fade-up">
                            Augnetics is a technology company based in DIFC Innovation Hub, Dubai which has developed a unique platform for Augmented Reality (AR) applications. The aim is to create infrastructure where different businesses and segments can take advantage of. Instead of adding value we aim to value amplify, we want to take what is already there and improve upon it using AR and our proprietary analytical tools. Our main USP with our platform is the user-friendly cloud-based AR experience streaming and tools to maintain rich engagement with the final user, while creating a sustainable business model for the businesses using our platform.
                        </p>
                        <div data-aos="fade-right" data-aos-duration="1000">
                            <img src="{{ asset('public/assets/images/about-2.jpg') }}"/>
                        </div>
                    </div>


                </div>
                <div  class="about-img flex" data-aos="fade-left" data-aos-duration="1000">
                    <img src="{{ asset('public/assets/images/about.jpg') }}"/>
                </div>
            </div>
        </section>
        <section class="services">
            <div class="services-container">
            <h3 data-aos="fade-up">SERVICES</h3>
            <div id="accordion" class="accordion">
                <div class="accordion-item" data-aos="fade-up">
                    <div class="accordion-title">
                        <span>01. Augmented Reality (AR) Activation</span>
                    </div>
                    <div class="accordion-content">
                        <p>A comprehensive study of the possible avenues to use AR in your business/venue. This includes complete study of current demographics, needs and pain points of users. In addition to understanding your business needs and KPIs. This will then be used to create a portfolio of AR experiences and interactions to meet those pain points and KPIs.</p>
                    </div>
                </div>
                <div class="accordion-item" data-aos="fade-up">
                    <div class="accordion-title">
                        <span>02. Content creation</span>
                    </div>
                    <div class="accordion-content">
                        <p>Creation of content depending on the sector and use case to operate on the platform. This can either be a greenfield creation or the conversion between a digital 3D file (such as CAD, STL) to a filetype suitable for the platform. Content creation also includes the creation of call to action links, rewards and scenarios.</p>
                    </div>
                </div>
                <div class="accordion-item" data-aos="fade-up">
                    <div class="accordion-title">
                        <span>03. Analytics and Meta-Data Mining</span>
                    </div>
                    <div class="accordion-content">
                        <p>Through the use of our proprietary platform, we are able to analyse tags, view time, clicks etc to understand final consumer behaviour. We can use our inhouse analytical techniques to process and present this data to you to gain a more holistic view of the end user, their main engagement metrics and what can be done to retain and engage them in the future.</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
        <section class="use-cases">
            <div class="use-cases-img" data-aos="fade-up">
                <img src="{{ asset('public/assets/images/use-case.jpg') }}">
            </div>
            <div class="wrapper">
            <h3 data-aos="fade-up" >USE CASES</h3>

            <div class="use-cases-slider" id="cases" data-aos="fade-up">
                <div class="use-cases-slide">
                    <span>Culture</span>
                </div>
                <div class="use-cases-slide"> <span>Education</span></div>
                <div class="use-cases-slide"> <span>Retail</span> </div>
                <div class="use-cases-slide"> <span>Entertainment</span></div>
            </div>
</div>
        </section>
        <section class="contact-us wrapper" id="contactUs">
            <div class="contact-us-container flex">
                <div class="contact-us-img" data-aos="fade-right">
                    <div class="contact-img"></div>
                </div>
                <form action="{{ route('home.contact-us') }}" method="post" class="contact-us-form" data-aos="fade-left">
                    @csrf
                    <h3>To know more please fill this form so we can share more details</h3>
                    @if(session()->has('success_message'))
                        <div class="alert alert-success">
                            <script> document.getElementById('contactUs').scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" }); </script>
                            {{ session()->get('success_message') }}
                        </div>
                    @elseif(session()->has('failed_message'))
                        <div class="alert alert-failed">
                            <script> document.getElementById('contactUs').scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" }); </script>
                            {{ session()->get('failed_message') }}
                        </div>
                    @endif

                    @if($errors->any())
                        <script> document.getElementById('contactUs').scrollIntoView({ behavior: 'smooth', block: "start", inline: "nearest" }); </script>
                    @endif

                    <div class="flex">
                        <div class="field-row">
                            <input type="text" name="name" placeholder="Name" />
                            <span>
                                @error('name')
                                    {{$message}}
                                @enderror
                            </span>
                        </div>
                        <div class="field-row">
                            <input type="text" name="occupation" placeholder="Occupation" />
                            <span>
                                @error('occupation')
                                    {{$message}}
                                @enderror
                            </span>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="field-row">
                            <input type="email" name="email" placeholder="Email" />
                            <span>
                                @error('email')
                                    {{$message}}
                                @enderror
                            </span>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="field-row">
                            <textarea name="message" placeholder="Message (Optional)"></textarea>
                            <span>
                                @error('message')
                                    {$message}}
                                @enderror
                            </span>
                        </div>
                    </div>
                    <div class="flex">
                        <button type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>

    </main>
    <footer>
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
    </footer>
    </body>
</html>

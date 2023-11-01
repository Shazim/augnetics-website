$(document).ready(function(){
    const $header = $('#header');
    const $accordion = $('#accordion');
    const $cases = $('#cases');


    // Accordion
    if($accordion.length){
        $accordion.find(".accordion-title").click(function(){
           const isOpened =  $(this).hasClass('accordion-opened');
            $accordion.find('.accordion-title').removeClass('accordion-opened');
            if(!isOpened){
                $(this).addClass('accordion-opened');
            }
            $(this).parent(".accordion-item").find(".accordion-content").slideToggle();
            $(this).parent(".accordion-item").prevAll(".accordion-item").find(".accordion-content").slideUp();
            $(this).parent(".accordion-item").nextAll(".accordion-item").find(".accordion-content").slideUp();
        });
    }

    // Slider
    if($cases.length) {
        $cases.slick({
            infinite: true,
            slidesToScroll: 1,
            arrows: false,
            slide: '.use-cases-slide',
            slidesToShow: 3,
            centerMode: true,
            centerPadding: '60px',
            responsive: [{
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                }
            }]
        });
    }


    AOS?.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        offset: 0, // offset (in px) from the original trigger point
        delay: 400, // values from 0 to 3000, with step 50ms
        duration: 600, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: true, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });


    $(window).scroll(function(){
        const scrollPosition = $(window).scrollTop();
        scrollPosition > 100 ?
        $header.addClass('scroll'):
        $header.removeClass('scroll');
    })
});


$(document).ready(function() {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** Click event on toggle menu */
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // Owl-carousel for blog
    /*$('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: responsive 
    })*/



    //AOS Instance
    AOS.init();

});
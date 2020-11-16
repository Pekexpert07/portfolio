$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        };
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        };
    });
    // BOTON SCROLL UP
    $('.scroll-up-btn').click(() => {
        $('html').animate({ scrollTop: 0 });
    });
    // MENU DESPLEGABLE
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    });
    // ENLACE DESCARGA CURRICULUM 
    const enlace = "curriculumUno.pdf";
    $('.button-cv').attr("href", enlace);
    // TYPING ANIMATION
    var typed = new Typed(".typing", {
        strings: ["Webs", "APPs", "Servidores", "Bases de datos"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
      strings: ["Webs", "APPs", "Servidores", "Bases de datos"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    // CAROUSEL 
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
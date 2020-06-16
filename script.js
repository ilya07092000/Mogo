$(function() {

    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop;

    // FIXED HEADER
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop() + $("#header").innerHeight();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset > introH) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
    };

    // SMOOTH SCROLL
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");  
        $this.addClass("active");    

        $("html, body").animate({
            scrollTop: blockOffset - $("#header").innerHeight()
        }, 1000);

    })


    // Menu nav toggle
    $("#nav__toggle").on("click", function(event) {
        event.preventDefault();
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    })


    // COLLAPSE
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data("collapse");

        $this.toggleClass("active")
        $(blockId).slideToggle();
    })

    
    /* Slider */

    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    
});
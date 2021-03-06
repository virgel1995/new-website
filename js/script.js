$(document).ready(function () {
    /**
     * jQuary
     * navbar-toggler
     */

    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("change")

    });

    //sticky navbar less padding

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        if (position >= 718) {
            $(".navbar").addClass("navbar-background");
            $(".navbar").addClass("fixed-top");
        } else {
            $(".navbar").removeClass("navbar-background");
            $(".navbar").removeClass("fixed-top");
        }
    })

    //smooth scroll

    $(".nav-item a , .header-link").click(function (link) {
        link.preventDefault();
        let target = $(this).attr("href");

        $("html, body").stop().animate({
            scrollTop: $(target).offset().top - 25
        }, 3000);
    });
/// back-to-top
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
        $("#back-to-top").addClass("scrollTop-back-to-top");

    } else {
        $("#back-to-top").removeClass("scrollTop-back-to-top");

    }
})
//  whatsapp 
$(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 718) {
        $("#whatsap-link").addClass("scrollTop-whatsap");

    } else {
        $("#whatsap-link").removeClass("scrollTop-whatsap");

    }
})



    /**
     * ripples jQuary header animation
     * https://github.com/sirxemic/jquery.ripples
     */
     $("#header, .info").ripples({
         dropRadius: 10,
         perturbance: 0.6,
       });


    /**
     * jquary magiufic poup up  
     *https://dimsemenov.com/plugins/magnific-popup/documentation.html
     */

    $('.parent-container').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: " true"
        }
    });




/**
 * owl-carousel
 * https://owlcarousel2.github.io/OwlCarousel2
 */

    $('.owl-carousel').owlCarousel({
        items:4,
        lazyLoad:true,
        loop:true,
        margin:10
    });
})
// end of window load

//  swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

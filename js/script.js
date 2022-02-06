$(document).ready(function (){


    const routSlides = new Swiper('.routes__list > .swiper', {
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

  const techSlides = new Swiper('.technics__slider--bg > .swiper', {
    // If we need pagination
    pagination: {
      el: '.technics__pagenation .swiper-pagination',
      clickable: true,
    },
  });

  const stuffSlides = new Swiper('.stuff__slider--bg > .swiper', {
    spaceBetween: 100,
        // If we need pagination
    pagination: {
      el: '.stuff__pagenation .swiper-pagination',
      clickable: true,
    },
  });

  const gallerySlides = new Swiper('.gallery__container > .swiper', {
    spaceBetween: 400,
    // If we need pagination
    pagination: {
      el: '.gallery__pagenation .swiper-pagination',
      clickable: true,
    },
  });

  const priceSlides = new Swiper('.price__container > .swiper', {
    // If we need pagination
    slidesPerView: 1,
    centeredSlides: true,

    initialSlide: 1,
    loop: true,
    loopFillGroupWithBlank: false,
    pagination: {
      el: '.price__pagenation .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      999: {
        slidesPerView: 3
      }
    }
  });
  if ($(window).width() > 999) {
    const routGallery = new Swiper('.routes__item_gallery > .swiper', {
      slidesPerView: 4,
    });
  }

});

const burgerToogle = () => {
  $('.menu__btn').on('click', function() {
    $('body').toggleClass('no-scroll');
  });
}
const revealInit = () => {
  if ($(window).width() > 999) {
    ScrollReveal().reveal('.index_slider__text .text-1');
    ScrollReveal().reveal('.index_slider__text .text-2');
    ScrollReveal().reveal('.index_slider__text .text-3', {delay: 500});
    ScrollReveal().reveal('.index_slider__text .text-4', {delay: 2000})
  }
}

document.addEventListener(
    "DOMContentLoaded",
    function () {
      burgerToogle();
      revealInit();
    },
    false
);

$(function () { // wait for document ready
  // init

  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
  var tl = new TimelineMax();
/*  tl.from("section.panel.routes", 1, {xPercent: 100});*/
  tl.from("section.panel.technics", 1, {xPercent: 100});
  tl.from("section.panel.stuff", 1, {xPercent: -100});
  tl.from("section.panel.gallery", 1, {xPercent: 100});
  tl.from("section.panel.reserve", 1, {xPercent: -100});
  /*  tl.from("section.panel.price", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top*!/*/


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "250%"
  })
      .setPin("#pinMaster")
      .setTween(tl)
      .addTo(controller);

});




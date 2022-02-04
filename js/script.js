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
      576: {
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

const catalogToogle = () => {

}
document.addEventListener(
    "DOMContentLoaded",
    function () {
      catalogToogle();
    },
    false
);

/*
$(function () { // wait for document ready
  // init
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
      .fromTo("section.panel.routes", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
      .fromTo("section.panel.technics",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .fromTo("section.panel.stuff", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
      .fromTo("section.panel.gallery", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})  // in from left
      .fromTo("section.panel.reserve",    1, {x:  "100%"}, {x: "0%", ease: Linear.easeNone})  // in from right
      .fromTo("section.panel.price", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: "300%"
  })
      .setPin("#pinContainer")
      .setTween(wipeAnimation)
      .addIndicators() // add indicators (requires plugin)
      .addTo(controller);
});*/

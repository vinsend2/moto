$(document).ready(function (){

  var $counter = document.querySelector(".routes__pagenation_num")

    const routSlides = new Swiper('.routes__list > .swiper', {
      // If we need pagination

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      on: {
        init: function(){
          $counter.innerHTML = `0${this.realIndex+1}`;
        },
        slideChange: function(){
          $counter.innerHTML = `0${this.realIndex+1}`;
        }
      }
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

const modalInit = () => {

  $('.show-modal').on('click', function() {
    $('.modal').toggleClass('modal__show');
    $('body').toggleClass('no-scroll');
    event.preventDefault()
  });
  $('.modal__btn-close').on('click', function() {
    $('.modal').addClass('modal__show');
    $('body').addClass('no-scroll');
  });
  $('.modal__backdrop').on('click', function() {
    if (event.target.dataset.dismiss === 'modal') {
      $('.modal').toggleClass('modal__show');
      $('body').toggleClass('no-scroll');
    }
  });

}



document.addEventListener(
    "DOMContentLoaded",
    function () {
      burgerToogle();
      revealInit();
      modalInit();
      $(".phone_mask").mask("+7(999)999-99-99");
    },
    false
);

/*$(function () { // wait for document ready
  // init
  if ($(window).width() < 999) {
  var controller = new ScrollMagic.Controller();

  // define movement of panels
  var wipeAnimation = new TimelineMax()
  var tl = new TimelineMax();
/!*  tl.from("section.panel.routes", 1, {xPercent: 100});*!/
  tl.from("section.section.technics", 1, {xPercent: 100});
  tl.from("section.section.stuff", 1, {xPercent: -100});
  tl.from("section.section.gallery", 1, {xPercent: 100});
  tl.from("section.section.reserve", 1, {xPercent: -100});
  /!*  tl.from("section.panel.price", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone}); // in from top*!/!*!/


  // create scene to pin and link animation
  new ScrollMagic.Scene({
    triggerElement: "#pinMaster",
    triggerHook: "onLeave",
    duration: "450%"
  })
      .setPin("#pinMaster")
      .setTween(tl)
      .addTo(controller);
  }
});*/


$(document).ready(function() {
  const header = document.querySelector(".header")
  if ($(window).width() > 999) {
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
    navigation: {
      'position': 'left',
      'textColor': '#fff',
      'bulletsColor': '#fff',
     /* 'tooltips': ['Главная', 'Маршруты', 'Техника', 'Стафф', 'Галлерея', 'Заказать звонок', 'Прайс']*/
    },
    scrollingSpeed: 700,
    easing: 'swing',
    onLeave: function(index, nextIndex, direction){
      if(index == 1 && direction =='down'){
        $( ".header" ).css( "top", "-170px" );
      }

      else if(index == 2 && direction == 'up'){
        $( ".header" ).css( "top", "0" );
      }
      else if(index == 7 && direction == 'up'){
        $( ".footer" ).css( "bottom", "-150px" );
      }
      else if(index == 6 && direction == 'down'){
        $( ".footer" ).css( "bottom", "0" );
      }
    },
    afterLoad: function (anchorLink, index) {
      if (index == 7) {
        $( ".footer" ).css( "bottom", "0" );
      }
    }
  })
  }
});

/*
$(document).ready(function() {
  $('#pagepiling').pagepiling({
    menu: null,
    direction: 'vertical',
    verticalCentered: true,
    sectionsColor: [],
    anchors: [],
    scrollingSpeed: 700,
    easing: 'swing',
    loopBottom: false,
    loopTop: false,
    css3: true,
    navigation: {
      'textColor': '#000',
      'bulletsColor': '#000',
      'position': 'right',
      'tooltips': ['section1', 'section2', 'section3', 'section4', 'section5']
    },
    normalScrollElements: null,
    normalScrollElementTouchThreshold: 5,
    touchSensitivity: 5,
    keyboardScrolling: true,
    sectionSelector: '.section',
    animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
  });
});
*/

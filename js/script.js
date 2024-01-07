$('.counter').counterUp({
    delay: 10,
    time: 10000
});

$('.cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow:'<i class="fa-solid fa-chevron-left prr"></i>',
    nextArrow:'<i class="fa-solid fa-chevron-right nrr"></i>',
    dots: true
  });


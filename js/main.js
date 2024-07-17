const windowsWidth = $(window).width();
$(document).ready(function () {
  const windowsWidth = $(window).width();
  if (windowsWidth <= 768) {
    $('.cards-slider').slick({
      autoplay: true,
      pauseOnHover: true,
      slideToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2500,
      arrows: false,
      dots: false,
      speed: 1500,
      infinite: true,
      loop: true
    });
  }
});
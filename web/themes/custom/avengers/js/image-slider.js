(function ($) {
  $(document).ready(function () {
    const $slider = $('.slick-slider .slick-track .field--items');

    $slider.slick({
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $(".prev-btn").click(function () {
      $slider.slick("slickPrev");
    });

    $(".next-btn").click(function () {
      $slider.slick("slickNext");
    });

    $slider.on("afterChange", function (event, slick, currentSlide) {
      $(".prev-btn").toggleClass("slick-disabled", currentSlide === 0);
      $(".next-btn").toggleClass("slick-disabled", currentSlide === slick.slideCount - 1);
    });

    // Initial state check
    $(".prev-btn").toggleClass("slick-disabled", $slider.slick('slickCurrentSlide') === 0);
  });
})(jQuery);

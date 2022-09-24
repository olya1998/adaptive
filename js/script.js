$(document).ready(function(){
  $('.gallery').slick({
    dots: true,
    arrows: false,
    infinite: true,
    spead: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  });
});



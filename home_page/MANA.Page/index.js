$(".slider").slick({
  slidesToShow: 3,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 6000,
  cssEase: "linear",
  prevArrow: ".prev_arrow",
  nextArrow: ".next_arrow",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "70px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 1,
      },
    },
  ],
});



let nav = document.querySelector(".nav_links");
function menuBtn(){
  nav.classList.toggle("start-0");
  document.body.classList.toggle("overflow-hidden")

}

function hide(){
  nav.classList.remove("start-0");
  document.body.classList.remove("overflow-hidden")
}


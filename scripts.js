function scroll_to(clicked_link, nav_height) {
  var element_class = clicked_link.attr("href").replace("#", ".");
  var scroll_to = 0;
  if (element_class != ".top-content") {
    element_class += "-container";
    scroll_to = $(element_class).offset().top - nav_height;
  }
  if ($(window).scrollTop() != scroll_to) {
    $("html, body").stop().animate({ scrollTop: scroll_to }, 1000);
  }
}

jQuery(document).ready(function () {
  /*
	    Navigation
	*/
  $("a.scroll-link").on("click", function (e) {
    e.preventDefault();
    scroll_to($(this), $("nav").outerHeight());
  });

  /*
        Background
    */
  $(".section-4-container").backstretch("assets/img/backgrounds/bg.jpg");

  /*
	    Wow
	*/
  new WOW().init();

  /*
	    Carousel
	*/
  $("#carousel-example").on("slide.bs.carousel", function (e) {
    /*
	        CC 2.0 License Iatek LLC 2018
	        Attribution required
	    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 5;
    var totalItems = $(".carousel-item").length;

    if (idx >= totalItems - (itemsPerSlide - 1)) {
      var it = itemsPerSlide - (totalItems - idx);
      for (var i = 0; i < it; i++) {
        // append slides to end
        if (e.direction == "left") {
          $(".carousel-item").eq(i).appendTo(".carousel-inner");
        } else {
          $(".carousel-item").eq(0).appendTo(".carousel-inner");
        }
      }
    }
  });
});

//HAMBURGUER ANIMATION
var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
});

var $hamburger = $(".hamburger");
$hamburger.on("click", function (e) {
  $hamburger.toggleClass("is-active");
});

$("carousel-productos").carousel({
  interval: 300,
});

$("#carousel-logo").carousel({
  interval: 2000,
});

$("#carousel-obras").carousel({
  interval: 3200,
});

$("#carousel-hero").carousel({
  interval: 3200,
});

// const navLinks = document.querySelectorAll(".collapser");
// const menuToggle = document.getElementById("navbarTogglerDemo02");
// const bsCollapse = new bootstrap.Collapse(menuToggle);
// navLinks.forEach((l) => {
//   l.addEventListener("click", () => {
//     bsCollapse.toggle();
//   });
// });

/* let isModalVisible = false;
let isSpinnerVisible = false;
let message = document.getElementById("message");
let modal = document.getElementById("confirmacion");

function handleModal(status) {
  if (status == "success") {
    message.innerText = "Tu mensaje se envio correctamente";
  } else {
    message.innerText = "Ha ocurrido un error, por favor intenta nuevamente";
  }
  !isModalVisible
    ? modal.classList.add("center")
    : modal.classList.remove("center");
  isModalVisible = !isModalVisible;
} */


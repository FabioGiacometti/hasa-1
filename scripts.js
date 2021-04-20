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
  interval: 500,
});

$("#carousel-obras").carousel({
  interval: 3200,
});

$("#carousel-hero").carousel({
  interval: 3200,
});

const navLinks = document.querySelectorAll(".collapser");
const menuToggle = document.getElementById("navbarTogglerDemo02");
const bsCollapse = new bootstrap.Collapse(menuToggle);
navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    bsCollapse.toggle();
  });
});

let isModalVisible = false;
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
}

// listado de obras
const obras = [
  {
    active: true,
    title: "Alberdi",
    images: [
      "alberdi(1).jpg",
      "alberdi(2).jpg",
      "alberdi(3).jpg",
      "alberdi(4).jpg",
    ],
  },
  {
    title: "Los Cedros",
    images: ["cedros(1).jpg", "cedros(2).jpg", "cedros(3).jpg"],
  },
  {
    title: "Plaza España",
    images: [
      "plaza_espana(1).jpg",
      "plaza_espana(2).jpg",
      "plaza_espana(3).jpg",
    ],
  },
  {
    title: "Sin Nombre",
    images: ["sin_nombre(1).jpg", "sin_nombre(2).jpg", "sin_nombre(3).jpg"],
  },
  {
    title: "Suquia",
    images: [
      "suquia(1).jpg",
      "suquia(2).jpg",
      "suquia(3).jpg",
      "suquia(4).jpg",
      "suquia(5).jpg",
      "suquia(6).jpg",
    ],
  },
  {
    title: "Tropezon",
    images: [
      "tropezon(1).jpg",
      "tropezon(2).jpg",
      "tropezon(3).jpg",
      "tropezon(4).jpg",
    ],
  },
];

// Item del carrusel
// const carouselSlide = obras.map((obra) =>

// obra.images.map( (imagen, index)=>
//   `<div class="carousel-item">
//       ${index === 0 ? `<div class="overlay-container">
//         <span class="overlay-item">
//           <h6>Obra: ${index}</h6>
//           <p>Obra provista y asesorada por Hasa S.A.</p>
//         </span>
//       </div>`
//           : null
//       }
//       <img class="item"
//         src="./assets/imgs/obras/${imagen}"
//         alt="${imagen}">
//     </div>`)
// );

const carouselSlide = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].images.length; j++) {
      if (j === 0) {
        arr.push(`<div class="carousel-item" id="${ i.toString() + j.toString()}">
           <div class="overlay-container">
             <span class="overlay-item">
               <h6>Obra: ${array[i].title}</h6>
               <p>Obra provista y asesorada por Hasa S.A.</p>
             </span>
           </div>
            <img class="item"
              src="./assets/imgs/obras/${array[i].images[j]}"
             alt="Imagen de obra en${array[i].title}">
         </div>`);
      } else {
        arr.push(`<div class="carousel-item">
         <img class="item"
                      src="./assets/imgs/obras/${array[i].images[j]}"
                      alt="Imagen de obra en ${array[i].title}">
                  </div>`);
      }
    }
  }
  return arr;
};

const insertSlider = () =>{
  (document.getElementById("obras-images").innerHTML = carouselSlide(obras).join(" "))
document.getElementById("00").classList.add("active")};

insertSlider();

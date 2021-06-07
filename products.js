const products = [
    {
      image: "./assets/imgs/productos/product_(1).jpg",
      name: "Carretel reduccion - ramal Te - ramal Y - Curva 90º",
    },
    {
      image: "./assets/imgs/productos/product_(2).jpg",
      name: "Conexion reduccion amplia tolerancia",
    },
    {
      image: "./assets/imgs/productos/product_(3).jpg",
      name: "Sifón Omega",
    },
    {
      image: "./assets/imgs/productos/product_(4).jpg",
      name: "Junta conexión doble buloneria",
    },
    {
      image: "./assets/imgs/productos/product_(5).jpg",
      name: "Junta conexion simple buloneria",
    },
    {
      image: "./assets/imgs/productos/product_(6).jpg",
      name: "Junta de desmontaje autoportante",
    },
    {
      image: "./assets/imgs/productos/product_(7).jpg",
      name: "Manifold con doble salida tangencial",
    },
    {
      image: "./assets/imgs/productos/product_(8).jpg",
      name: "Ramal cruz reduccion con curvas",
    },
    {
      image: "./assets/imgs/productos/product_(9).jpg",
      name: "Ramal tangencial con doble salida y curva al final",
    },    
    {
    image: "./assets/imgs/productos/product_(10).jpg",
    name: "Ramal Y",
    },  
    {
    image: "./assets/imgs/productos/product_(11).jpg",
    name: "Reducciones unidas por una valvula",
    },  
    {
    image: "./assets/imgs/productos/product_(12).jpg",
    name: "Tambor de reparación",
    },  
    {
    image: "./assets/imgs/productos/product_(13).jpg",
    name: "Curva especial con derivación",
  },
  {
    image: "./assets/imgs/productos/product_(14).jpg",
    name: "Tapón prueba hidraulica",
  }, {
    image: "./assets/imgs/productos/product_(15).jpg",
    name: "Reducción especial",
  }, {
    image: "./assets/imgs/productos/product_(16).jpg",
    name: "Reducciones y junta de desmontaje autoportante",
  }
];

var container = document.getElementById("show-product-container");
var showMoreBtn = document.getElementById('show-more-btn');
const productCarousel = document.getElementById("products-images")
let containerStatus = false
const productListContainer = document.getElementById('product-list-container').offsetHeight

const product = (data) => {
    return `
        <div class="swiper-slide product-slide">
        <img loading="lazy" src="${data.image}" class="product-image">
        <span class="product-overlay">
           <p class="product-overlay__title">${data.name}</p>
        </span>
        </div>
    `
}

showMoreBtn.addEventListener('click',function(){
  container.style.height = !containerStatus ? productListContainer + 90 + "px" : "52px"
  containerStatus = !containerStatus
  showMoreBtn.innerText = containerStatus ? "- Ocultar lista" : "+ Mostrar lista"
})

const productCarouselGenerator = (data) => {
    let arr = []
    for(let i = 0; i < products.length; i++){
        arr.push(product(data[i]))
    }
    return arr.join(" ")
}

productCarousel.innerHTML = productCarouselGenerator(products)

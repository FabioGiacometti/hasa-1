const products = [
    {
      image: "./assets/imgs/productos/product_(1).png",
      name: "Carretel reduccion - ramal Te - ramal Y - Curva 90º",
    },
    {
      image: "./assets/imgs/productos/product_(2).png",
      name: "Conexion reduccion amplia tolerancia",
    },
    {
      image: "./assets/imgs/productos/product_(3).png",
      name: "Curva manifold",
    },
    {
      image: "./assets/imgs/productos/product_(4).png",
      name: "Junta conexión doble buloneria",
    },
    {
      image: "./assets/imgs/productos/product_(5).png",
      name: "Junta conexion simple buloneria",
    },
    {
      image: "./assets/imgs/productos/product_(6).png",
      name: "Junta de desmontaje autoportante",
    },
    {
      image: "./assets/imgs/productos/product_(7).png",
      name: "Manifold con doble salida tangencial",
    },
    {
      image: "./assets/imgs/productos/product_(8).png",
      name: "Ramal cruz reduccion con curvas",
    },
    {
      image: "./assets/imgs/productos/product_(9).png",
      name: "Ramal tangencial con doble salida y curva al final",
    },    
    {
    image: "./assets/imgs/productos/product_(10).png",
    name: "Ramal Y",
    },  
    {
    image: "./assets/imgs/productos/product_(11).png",
    name: "Reducciones unidas por una valvula",
    },  
    {
    image: "./assets/imgs/productos/product_(12).png",
    name: "Tambor de reparación",
    },  
    {
    image: "./assets/imgs/productos/product_(13).png",
    name: "Pieza especial, consultar",
    }
  ];

const product = (data) => {
    return `
        <div class="swiper-slide product-slide">
        <img src="${data.image}" class="product-image">
        <span class="product-overlay">
           <p class="product-overlay__title">Pieza tanto</p>
        </span>
        </div>
    `
}
const productCarousel = document.getElementById("products-images")

const productCarouselGenerator = (data) => {
    let arr = []
    for(let i = 0; i < products.length; i++){
        // const slide = document.createElement("div");
        // slide.classList.add("w-100");
        // slide.innerHTML = product(data[i])
        // productCarousel.appendChild(slide)
        arr.push(product(data[i]))
    }
    return arr.join(" ")
}


productCarousel.innerHTML = productCarouselGenerator(products)
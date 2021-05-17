const products = [
    {
      image: "./assets/imgs/products/product_(1).jpg",
      name: "Producto1",
    },
    {
      image: "./assets/imgs/products/product_(2).jpg",
      name: "Producto2",
    },
    {
      image: "./assets/imgs/products/product_(3).jpg",
      name: "Producto3",
    },
    {
      image: "./assets/imgs/products/product_(4).jpg",
      name: "Producto4",
    },
    {
      image: "./assets/imgs/products/product_(5).jpg",
      name: "Producto5",
    },
    {
      image: "./assets/imgs/products/product_(6).jpg",
      name: "Producto6",
    },
    {
      image: "./assets/imgs/products/product_(7).jpg",
      name: "Producto7",
    },
    {
      image: "./assets/imgs/products/product_(8).jpg",
      name: "Producto8",
    },
    {
      image: "./assets/imgs/products/product_(9).jpeg",
      name: "Producto9",
    },
  ];

const product = (data) => {
    return `
    <div class="w-100 product-image one">
        <img src="${data.image}">
        <span class="product-overlay">
           <p class="product-overlay__title">Pieza tanto</p>
        </span>
     </div>
    `
}

const productCarouselGenerator = (data) => {
    const arr = []
    for(let i = 0; i < products.length; i++){
        arr.push(product(data[i]))
    }
    console.log(arr)
    return arr.join(" ")
}

const productCarousel = document.getElementById("desktop-products-carousel")
const 
productCarouselGenerator(products)
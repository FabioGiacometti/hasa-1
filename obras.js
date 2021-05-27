// listado de obras
const obras = [
  {
    active: true,
    title: "Alberdi",
    year: "2000's",
    images: [
      "alberdi(1).jpg",
      "alberdi(2).jpg",
      "alberdi(3).jpg",
      "alberdi(4).jpg",
    ],
  },
  {
    title: "Los Cedros",
    year: "2000's",
    images: [
      "cedros(1).jpg", 
      "cedros(2).jpg", 
      "cedros(3).jpg"],
  },
  {
    title: "Plaza España",
    year: "2000's",
    images: [
      "plaza_espana(1).jpg",
      "plaza_espana(2).jpg",
      "plaza_espana(3).jpg",
    ],
  },
  {
    title: "Martinolli",
    year: "2000's",
    images: [
      "sin_nombre(1).jpg", 
      "sin_nombre(2).jpg", 
      "sin_nombre(3).jpg"],
  },
  {
    title: "Los filtros",
    year: "2000's",
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
    year: "2000's",
    images: [
      "tropezon(1).jpg",
      "tropezon(2).jpg",
      "tropezon(3).jpg",
      "tropezon(4).jpg",
    ],
  },
];

const slideGenerator = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].images.length; j++) {
      arr.push(
        `<div 
              class="swiper-slide" id="${i.toString() + j.toString()}" 
                title='Obra: "${array[i].title}"'>
                ${
                  j == 0
                    ? `<span class="overlay-container">
                    <span class="overlay-item">
                    <h6> Obra: "${array[i].title}" </h6> 
                    <h5> Año: ${array[i].year} </h5> 
                </span>
              </span>`
                    : ""
                }
  
                <img src="./assets/imgs/obras/${
                  array[i].images[j]
                }" class="swiper-img obras-image"/>
            
            </div>`
      );
    }
  }
  return arr;
};

const insertSlider = () => {
  document.getElementById("obras-images").innerHTML =
    slideGenerator(obras).join(" ");
};

insertSlider();

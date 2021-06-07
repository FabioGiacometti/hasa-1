// listado de obras
const obras = [
  {
    title: "Martinolli",
    year: "2020",
    description: "Obra planta Suquia a Martinolli",
    images: [
      "sin_nombre(1).jpg",
      "sin_nombre(2).jpg",
      "sin_nombre(3).jpg",
      "sin_nombre(4).jpg",
    ],
  },
  {
    title: "Plaza España",
    year: "2019",
    description: "Obra Interferencias Plaza España",
    images: [
      "plaza_espana(1).jpg",
      "plaza_espana(2).jpg",
      "plaza_espana(3).jpg",
    ],
  },
  {
    active: true,
    title: "Alberdi",
    year: "2017",
    description: "Obra Alberdi - Tercera etapa",
    images: [
      "alberdi(1).jpg",
      "alberdi(2).jpg",
      "alberdi(3).jpg",
      "alberdi(4).jpg",
    ],
  },
  {
    title: "Cedros",
    year: "2013",
    description: "Obra Estación elevadora Los Cedros",
    images: ["cedros(1).jpg", "cedros(2).jpg", "cedros(3).jpg"],
  },
  {
    title: "Filtros",
    year: "2017",
    description: "Obra Filtros rápidos planta Suquia",
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
    year: "2016",
    description: "Obra Nudo vial Tropezón",
    images: [
      "tropezon(1).jpg",
      "tropezon(2).jpg",
      "tropezon(3).jpg",
      "tropezon(4).jpg",
    ],
  },
  {
    title: "Villa Dolores",
    year: "2010",
    description: "Obra Embalse nivelador Villa Dolores",
    images: ["villa_dolores1.jpg", "villa_dolores2.jpg", "villa_dolores3.jpg"],
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
                    <h6 style="margin-right: -11px;"> Obra: "${array[i].title}" </h6> 
                    <h4>${array[i].description}</h4>
                    <h5 style="color: gray; line-height: 10px;"> Año: ${array[i].year} </h5> 
                </span>
              </span>`
                    : ""
                }
  
                <img loading="lazy" src="./assets/imgs/obras/${
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

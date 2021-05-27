const clients = [
  {
    url: "http://www.adc.net.ar/",
    name: "Aguas del Colorado",
    image: "./assets/imgs/clients/logo-aguas-colorado.png",
  },
  {
    url: "https://www.aguascordobesas.com.ar/",
    name: "Aguas Cordobesas",
    image: "./assets/imgs/clients/logo-aguas.jpg",
  },
  {
    url: "https://cosagltda.com/",
    name: "Coop. trab. de obras sanitarias Alta Gracia Limitada",
    image: "./assets/imgs/clients/logo-alta-gracia.jpg",
  },
  {
    url: "https://www.exportadoresdecordoba.com/empresas/arc-srl-2810.html",
    name: "ARC Empresa Constructora",
    image: "./assets/imgs/clients/logo-arc-1.png",
  },
  {
    url: "http://www.coopi.com.ar/",
    name: "Cooperativa Crecer Carlos Paz",
    image: "./assets/imgs/clients/logo-carlos-paz.png",
  },
  {
    url: "https://www.cclipsa.com.ar/",
    name: "CClip",
    image: "./assets/imgs/clients/logo-cclip.jpg",
  },
  {
    url: "http://www.conorvial.com.ar/",
    name: "Conorvial",
    image: "./assets/imgs/clients/logo-conorvial.jpg",
  },
  {
    url: "https://www.essapp.coop/cooperativa-de-viviendas-agua-potable-y-servicios-publicos-servicios-asistenciales-y-turismo-cosquin",
    name: "Cooperativa de servicios Cosquin",
    image: "./assets/imgs/clients/logo-coop-cosquin.png",
  },
  {
    url: "",
    name: "Cooperativa de servicios Cruz del Eje",
    image: "./assets/imgs/clients/logo-coop-cruz.png",
  },
  {
    url: "http://www.cooprc.com.ar/",
    name: "Cooperativa de obras y servicios Rio Ceballos",
    image: "./assets/imgs/clients/logo-coop-rio-ceballos.jpg",
  },
  {
    url: "https://estructuras.com.ar/",
    name: "Estructuras S.A.",
    image: "./assets/imgs/clients/logo-estructuras.png",
  },
  {
    url: "http://www.gieco.com.ar/",
    name: "Gieco",
    image: "./assets/imgs/clients/logo-gieco.png",
  },
  {
    url: "http://henisa.com/",
    name: "Henisa Sudamericana S.A.",
    image: "./assets/imgs/clients/logo-henisa.png",
  },
  {
    url: "https://www.cba.gov.ar/concursos-publicos/concursos-tramo-personal-superior/ministerio-de-infraestructura/",
    name: "Ministerio de Infraestructura de la provincia de Córdoba",
    image: "./assets/imgs/clients/logo-infra.png",
  },
  {
    url: "./assets/imgs/logos/logo-install.png",
    name: "Inst'all Srl",
    image: "./assets/imgs/clients/logo-install.png",
  },
  {
    url: "https://item.com.ar/",
    name: "Item Construcciones S.A.",
    image: "./assets/imgs/clients/logo-item.jpg",
  },
  {
    url: "http://www.marinellisa.com/",
    name: "Marinelli",
    image: "./assets/imgs/clients/logo-marinelli.jpg",
  },
  {
    url: "http://www.michelotti.com.ar/",
    name: "Michelotti",
    image: "./assets/imgs/clients/logo-michelotti.jpg",
  },
  {
    url: "https://www.cba.gov.ar/ministerio-de-agua-ambiente-y-servicios-publicos-3/",
    name: "Ministerio de Agua, Ambiente y Servicios Públicos Cordoba",
    image: "./assets/imgs/clients/logo-min-agua.png",
  },
  {
    url: "https://www.facebook.com/redexconstruccionessrlcordoba/",
    name: "Redex",
    image: "./assets/imgs/clients/logo-redex.jpg",
  },
  {
    url: "http://www.roggio.com.ar/",
    name: "Roggio",
    image: "./assets/imgs/clients/logo-roggio.png",
  },
  {
    url: "http://romerocammisa.com.ar/",
    name: "Romero Camisa Construcciónes S.A.",
    image: "./assets/imgs/clients/logo-romero.png",
  },
  {
    url: "http://www.rovellacarranza.com.ar/",
    name: "Rovella Construcciónes",
    image: "./assets/imgs/clients/logo-rovella.png",
  },
];

const logoCarousel = document.getElementById("logos-images");
const clientGrid = document.getElementById("clients-container");

const clientGridGenerator = (array) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(`
    <a href="${array[i].url} " target="_blank" class="clients-card">
    <img class="grid-logos"
    src="${array[i].image}"
    alt="${array[i].name}"
    title="${array[i].name}">
    <!--// <p class="clients-card__name">${array[i].name}></p>-->
    </a>
      
      `);
  }
  return arr.join(" ");
};

const clientSliderGenerator = (data) => {
  return `
    <a href="${data.url} " target="_blank" class="clients-card swiper-slide">
    <img class=""
      src="${data.image}"
      alt="${data.name}"
      title="${data.name}">
    <p class="clients-card__name">${data.name}></p>
  </a>
    `;
};

const logoCarouselGenerator = (data) => {
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    arr.push(clientSliderGenerator(data[i]));
  }
  return arr.join(" ");
};

logoCarousel.innerHTML = logoCarouselGenerator(clients);
clientGrid.innerHTML = clientGridGenerator(clients);

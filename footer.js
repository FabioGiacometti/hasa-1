const footerContent = ` 
<div class="container">
    <div class="row d-flex align-items-center">
        <div class="col col-xs-12 d-flex justify-content-center justify-content-md-start">
            <img class="footer-logo"
            src="./assets/imgs/iconos/logo-footer.svg">
        </div>
        </div>
        <div class="row d-flex justify-content-center offset-md-1 pl-md-4">
        <div class="col-12 col-md-6">
            <h5 class="footer-title">Contactanos</h5>
            <div class="d-flex footer-row">
            <img class="footer-icon"
                src="./assets/imgs/iconos/ubicación.svg"
                alt="">
            <p>SS Raul O. Gorordo 250 (altura Juan B. Justo 6300)</p>
            </div>
            <div class="d-flex footer-row">
            <img class="footer-icon"
                src="./assets/imgs/iconos/mail.svg"
                alt="">
            <p>Contacto comercial: hasa@industriashasa.com.ar <br>
                Contacto técnico: tecnica@industriashasa.com.ar</p>
            </div>
            <div class="d-flex footer-row">
            <img class="footer-icon"
                src="./assets/imgs/iconos/telefono.svg"
                alt="">
            <p>+54 (351)4921770 <br>
                +54 (351)4922917</p>
            </div>
        </div>
        <div class="col-12 col-md-6">
            <h6 class="footer-title">MAPA DEL SITIO</h6>
            <div class="site-map">
            <a href="#">Clientes</a>
            <a href="#">Obras</a>
            <a href="#">Productos</a>
            <a href="#">Contacto</a>
            </div>
        </div>
    </div>
</div>`

const footer = document.getElementById("footer")
const footerContainer = document.createElement('div')
footerContainer.classList.add("container")
footerContainer.innerHTML = footerContent
footer.appendChild(footerContainer)

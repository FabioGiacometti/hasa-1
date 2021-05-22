const dondeEstamos = `<div class="container-fluid formulario-contacto pt-3 pt-md-0">
<div class="row flex-row-reverse container m-auto">
  <div class="col-md-6 p-4 card shadow rounded d-flex mt-md-n2 mb-md-n2" style="z-index: 2">
    <h2 class="text-center text-md-left mb-2 mb-4"
      style="color: #006CA7">Contacto</h2>
    <form id="form" class=""
      name="submit-to-google-sheet">
      <div class="form-group">
        <label for="nombre"
          style="color: gray">Nombre</label>
        <input type="text"
          required
          name="nombre"
          class="form-control"
          id="nombre"
          aria-describedby="nombre"
          placeholder="Ingrese su nombre"
          style="color: gray">
      </div>
      <div class="form-group">
        <label for="email"
          style="color: gray">Email</label>
        <input type="email"
          required  
          name="email"
          class="form-control"
          id="email"
          placeholder="Su email por favor"
          style="color: gray">
          
      </div>
      <div class="form-group">
        <label for="mensaje"
          style="color: gray">Mensaje</label>
        <textarea class="form-control"
          required  
          name="mensaje"
          id="mensaje"
          rows="3"
          style="color: gray"></textarea>
          
      </div>
      <button 
        type="submit"
        id="submit"
        class="btn btn-primary btn-block"
        disabled
        
        >Enviar! <span id="form-spinner"
          class="spinner-span"></span> </button>
    </form>
  </div>
  <a class="col-md-6  p-0"
    href="https://www.google.com/maps/place/HASA+S.A/@-31.3479384,-64.178957,18z/data=!4m5!3m4!1s0x943299bde333735f:0xeee11d3a175398a7!8m2!3d-31.347595!4d-64.17846"
    target="_blank">
    <img class="img-fluid w-100 h-100"
      src="./assets/imgs/mapaHasa.png"
      alt=""
      style="   
    object-fit: cover;
    object-position: 56.9%;
    min-height: 340px;
     ">
  </a>

</div>
</div>`

const dondeEstamosSection = document.getElementById("donde-estamos")
let dondeEstamosContent = document.createElement("div");
dondeEstamosContent.innerHTML = dondeEstamos
dondeEstamosSection.appendChild(dondeEstamosContent)
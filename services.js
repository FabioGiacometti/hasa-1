const services = `
        <div class="row">
          <div class="col-lg-4">
            <article class="card shadow p-4 rounded d-flex">
              <img src="./assets/imgs/iconos/card-industria.svg"
                alt=""
                class="card__image">
              <p class="card__description p-2 pt-4">
                Nuestra empresa cuenta con una larga trayectoria metalúrgica, especializándonos en fabricación y montaje de
                cañerías y accesorios de acero para la conducción de fluidos; desde diámetros DN 50mm hasta DN 3000mm.
              </p>
              <a href="#productos"
                class="card__link inline p-2">
                <p class="d-inline pr-3 card__arrow">Nuestros Productos</p>
              </a>
            </article>
          </div>
          
          <div class="col-lg-4">
            <article class="card shadow p-4  mt-xs-4 rounded ">
              <img src="./assets/imgs/iconos/card-clientes.svg"
                alt=""
                class="card__image">
              <p class="card__description p-2 pt-4">Trabajamos bajo normas, a solicitud de nuestros clientes. Nuestra experiencia y conocimiento en el rubro nos permite ofrecerles en forma exclusiva, asistencia de preventa y postventa, para
                lograr la mejor solución a los requerimientos del cliente.</p>
              <a href="#clientes"
                class="card__link inline p-2">
                <p class="d-inline pr-3 card__arrow">Nuestros Clientes</p>
              </a>
            </article>
          </div>
          <div class="col-lg-4">
            <article class="card shadow p-4 rounded d-flex">
              <img src="./assets/imgs/iconos/card-obras.svg"
                alt=""
                class="card__image">
              <p class="card__description p-2 pt-4">Nuestra misión es brindar en forma proactiva soluciones de
                ingeniería con alto
                valor agregado, confiable y diseñadas al requerimiento de cada proyecto.</p><br><br><br>
              <a href="#obras"
                class="card__link inline p-2">
                <p class="d-inline pr-3 card__arrow">Ver Proyectos</p>
              </a>
            </article>
          </div>
        </div>
      `;

      const serviciosSection = document.getElementById("servicios");
      const serviciosContainer = document.createElement("div");
      serviciosContainer.classList.add("container", "service-overlap");
      serviciosContainer.innerHTML = services
      serviciosSection.appendChild(serviciosContainer)
    
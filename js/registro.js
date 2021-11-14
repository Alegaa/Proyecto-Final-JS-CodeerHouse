// Trabajamos en el formulario.
const formulario = document.getElementById("form");
const nomnbre = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const mostrarError = document.getElementById("alerta");
// const alerta = document.getElementById("alerta");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let alerta = "";
  let entrar = false;
  // expresion regular, para validar el email. Me sirve para que el mail este completo, que contenga todas sus partes (el comienzo + @+ lo que sigue+.com)
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  mostrarError.innerHTML=""
  if (nomnbre.value.length < 3) {
    alerta += `El nombre es corto <br>`;
    entrar = true;
  }
  console.log(regexEmail.test(email.value));
  if (!regexEmail.test(email.value)) {
    alerta += `El email no es válido <br>`;
    entrar = true;
  }
  if (password.value.length < 8) {
    alerta += ` La contraseña es muy corta <br>`;
    entrar = true;
  }
  if(entrar){
      mostrarError.innerHTML= alerta
  }else{
      mostrarError.innerHTML = "Revisa tu casilla de mail para validar el registro"
  }
});

// Creación del footer, utilizando DOM.
const footer = document.getElementById("footer");
const containerFooter = document.createElement("div");
containerFooter.className = "container-footer";
containerFooter.innerHTML = ` <div class="contenido">
          <div class="box">
            <h2>MEDIOS DE PAGO</h2>
                <div class="pago">
                    <i class="fab fa-cc-visa"></i>
                    <i class="fab fa-cc-amex"></i>
                    <i class="fab fa-cc-diners-club"></i>
                    <i class="fab fa-cc-mastercard"></i>
                    <i class="fab fa-cc-paypal"></i>
                </div>
          </div>
          <div class="box">
            <h2>CONTACTANOS</h2>
            <div class="contacto">
                <a href="#"><i class="fas fa-envelope-open">nunzia@gmail.com</i></a>
                <a href="#"><i class="fab fa-whatsapp-square">1166554433</i></a>
            </div>
          </div>
          <div class="box">
            <h2>SIGUENOS</h2>
            <div class="red-social">
                <a href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a>
                <a href="https://www.facebook.com/"><i class="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
`;
footer.appendChild(containerFooter);
const containerPie = document.createElement("div");
containerPie.className = "container-pie";
containerPie.innerHTML = `
                     <small>&copy; 2021 <b>Gabriel Alegre</b> - Todos los Derechos Reservados</small>
`;
footer.appendChild(containerPie);

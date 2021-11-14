// Para recuperar la contraseña de usuario

const enviar = document.getElementById('Enviar');
enviar.addEventListener('click', () => {
    alert('Te enviamos un correo para que recuperes tu contraseña...')
})



// Creación del footer, utilizando DOM.
const footer = document.getElementById('footer');
const containerFooter = document.createElement('div');
containerFooter.className = "container-footer"
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
`
footer.appendChild(containerFooter);
const containerPie = document.createElement('div');
containerPie.className = "container-pie"
containerPie.innerHTML = `
                     <small>&copy; 2021 <b>Gabriel Alegre</b> - Todos los Derechos Reservados</small>
`
footer.appendChild(containerPie)
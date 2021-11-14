const modal = document.getElementById('boton-carrito');
window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

// modal de usuario

const modalAbrir = document.getElementById('abrirModal');
const modalCerrar = document.getElementById('cerrarModal');
const modalContainer = document.getElementsByClassName('modal-container')[0];
// Modal para que se abra cuando clickeo el usuario
modalAbrir.addEventListener('click', () => {
  modalContainer.classList.toggle('modal-active')
})
// cerrar modal cuando clickeo la X. 
modalCerrar.addEventListener('click', () => {
  modalContainer.classList.toggle('modal-active')
})


// Para recuperar la contraseña de usuario

const enviar = document.getElementById('Enviar');
enviar.addEventListener('click', () =>{
  alert('Te enviamos un correo para que recuperes tu contraseña...')
})












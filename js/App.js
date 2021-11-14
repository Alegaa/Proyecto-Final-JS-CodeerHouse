// creo un array de carrito, lo hago con let porque luego lo voy a utilizar.
let carrito = [];
// creo el array de productos, tambien con let. 
let Productos = [];

// llamo a la API local, con la información de los productos.
$.getJSON("./json/productos.json", (response, success) => {
  Productos = response;
  mostrarProductos(Productos);
  console.log(Productos);
});
// Creo una funcion para mostrar los productos, en el HTML, utilizo Jquery.
function mostrarProductos(Productos) {
  $("#container-productos").html("");
  Productos.forEach((items) => {
    $("#container-productos").append(
      ` <div class ="containerProduct__Tartas">
        <div><h3>${items.nombre}</h3></div>
        <div><img src="${items.img}" alt="" class= "containerProduct__Tartas"></div>
        <div><h3>$${items.precio}</h3></div>
        <div><button id="botonAgregar${items.id}">AGREGAR</button></div>
    </div>`);
    $(`#botonAgregar${items.id}`).on("click", () => {
      incluirAlCarrito(items.id);
    });
  });
}
// funcion que me permite incluir al carrito el producto.
function incluirAlCarrito(itemsId) {
  const productoEnCarrito = carrito.find((el) => el.id == itemsId);
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
  } else {
    const producto = Productos.find((e) => e.id === itemsId);
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    });
  }
  // guardo en el Local storage, para que puedo utilizarlo luego.
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarCarrito();
}

// Es una funtion que me permite eliminar productos del carrito.
// Y luego tambien le inclui el local storage para borrarlo de la memoria del [].
function eliminarProducto(itemId) {
  const quitarProducto = carrito.find((prod) => prod.id === itemId);

  quitarProducto.cantidad--;

  if (quitarProducto.cantidad === 0) {
    const index = carrito.indexOf(quitarProducto);
    carrito.splice(index, 1);
  }
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
  actualizarCarrito();
}


function actualizarCarrito() {
  $("#container-carrito").html("");
  carrito = JSON.parse(localStorage.getItem("carrito"));
  carrito.forEach((producto) => {
    $("#container-carrito").append(`
    <div class="productoEnCarrito">
    <p>${producto.nombre}</p>
    <p>Precio: $${producto.precio * producto.cantidad}</p>
    <p>Cantidad: ${producto.cantidad}</p>
    <a onclick="eliminarProducto(${producto.id})"><i class="fas fa-trash-alt"></i></a>
    </div>`);
  });

  $("#contadorCarrito").html(carrito.length);

  $("#contadorCarrito").html(carrito.reduce((acc, prod) => (acc += prod.cantidad), 0));

  $("#precioTotal").html(carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0));
}



const finalizarCompra = async () => {
  const itemsToMP = carrito.map((prod) => {
    return {
      title: prod.nombre,
      description: "",
      picture_url: prod.img,
      category_id: prod.id,
      quantity: prod.cantidad,
      currency_id: "ARS",
      unit_price: prod.precio,
    };
  });

// Incluyo el método de pago de MP, para terminar la operacion del usuario. 
  const response = await fetch(
    "https://api.mercadopago.com/checkout/preferences",
    {
      method: "POST",
      headers: {
        Authorization:
          "Bearer TEST-8781685064024793-102519-8dea1a620a583538062435148350d500-45098589",
      },
      body: JSON.stringify({
        items: itemsToMP,
        back_urls: {
          success: window.location.href,
          failure: window.location.href,
        },
      }),
    }
  );
  const data = await response.json();

  window.location.replace(data.init_point);
};

// Creación del footer, utilizando DOM.
const footer= document.getElementById('footer');
const containerFooter= document.createElement('div');
containerFooter.className = "container-footer"
containerFooter.innerHTML =` <div class="contenido">
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
const containerPie= document.createElement('div');
containerPie.className ="container-pie"
containerPie.innerHTML=`
                     <small>&copy; 2021 <b>Gabriel Alegre</b> - Todos los Derechos Reservados</small>
`
footer.appendChild(containerPie)
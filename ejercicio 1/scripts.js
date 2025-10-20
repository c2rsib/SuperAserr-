// USUARIO Y CLAVE ADMIN
const ADMIN_USUARIO = "admin";
const ADMIN_CLAVE = "clave123";

// PRODUCTOS SIMPLES
const productos = [
  { id: 1, nombre: "Arroz Diana 1kg", precio: 1200 },
  { id: 2, nombre: "Leche Dos Pinos 1L", precio: 950 },
  { id: 3, nombre: "Pan Bimbo Integral", precio: 1350 },
  { id: 4, nombre: "Café 1820 500g", precio: 2500 }
];

let carrito = [];

function iniciarSesion() {
  const usuario = document.getElementById("usuario").value;
  const clave = document.getElementById("clave").value;
  const errorMsg = document.getElementById("login-error");

  if (usuario === ADMIN_USUARIO && clave === ADMIN_CLAVE) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    mostrarSeccion("inicio");
    cargarProductos();
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}

function mostrarSeccion(id) {
  ["inicio", "productos", "carrito"].forEach(seccion => {
    document.getElementById(seccion).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

function cargarProductos() {
  const contenedor = document.getElementById("productos-lista");
  contenedor.innerHTML = "";

  productos.forEach(prod => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <div class="imagen-producto">
        <!-- Aquí puedes colocar una imagen -->
      </div>
      <h3>${prod.nombre}</h3>
      <p>₡${prod.precio.toLocaleString()}</p>
      <button onclick="agregarAlCarrito(${prod.id})">Agregar al carrito</button>
    `;
    contenedor.appendChild(div);
  });
}

function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  actualizarCarrito();
}

function actualizarCarrito() {
  document.getElementById("carrito-cantidad").textContent = carrito.length;
}

function mostrarCarrito() {
  mostrarSeccion("carrito");

  const contenedor = document.getElementById("carrito-items");
  contenedor.innerHTML = "";

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p>No hay productos en el carrito.</p>";
    document.getElementById("carrito-total").textContent = "Total: ₡0";
    return;
  }

  let total = 0;
  carrito.forEach((prod, index) => {
    total += prod.precio;
    const p = document.createElement("p");
    p.textContent = `${prod.nombre} - ₡${prod.precio.toLocaleString()}`;
    contenedor.appendChild(p);
  });

  document.getElementById("carrito-total").text}

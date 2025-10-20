// --- CREDENCIALES ADMIN ---
const ADMIN_USUARIO = "admin";
const ADMIN_CLAVE = "clave123";

// --- PRODUCTOS DISPONIBLES ---
const productos = [
  { id: 1, nombre: "Pan Bimbo Integral", precio: 1350 },
  { id: 2, nombre: "Leche Dos Pinos 1L", precio: 950 },
  { id: 3, nombre: "Arroz Diana 1kg", precio: 1200 },
  { id: 4, nombre: "Café 1820 500g", precio: 2500 },
  { id: 5, nombre: "Chocolate Nestlé", precio: 1800 },
];

let carrito = [];

// --- INICIAR SESIÓN ---
function iniciarSesion() {
  const usuario = document.getElementById("usuario").value.trim();
  const clave = document.getElementById("clave").value.trim();
  const errorMsg = document.getElementById("login-error");

  if (usuario === ADMIN_USUARIO && clave === ADMIN_CLAVE) {
    document.getElementById("login").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
    mostrarSeccion("inicio");
  } else {
    errorMsg.textContent = "Usuario o contraseña incorrectos.";
  }
}

// --- CAMBIO DE SECCIONES ---
function mostrarSeccion(id) {
  ["inicio", "productos", "carrito"].forEach(seccion => {
    document.getElementById(seccion).classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
}

// --- AGREGAR AL CARRITO ---
function agregarAlCarrito(id) {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    carrito.push(producto);
    actualizarCarrito();
    alert(`${producto.nombre} se agregó al carrito 🛒`);
  }
}

// --- ACTUALIZAR CARRITO ---
function actualizarCarrito() {
  document.getElementById("carrito-cantidad").textContent = carrito.length;
}

// --- MOSTRAR CARRITO ---
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

    const item = document.createElement("div");
    item.className = "item-carrito";
    item.innerHTML = `
      <p>${prod.nombre} - ₡${prod.precio.toLocaleString()}</p>
      <button class="btn" onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    contenedor.appendChild(item);
  });

  document.getElementById("carrito-total").textContent = "Total: ₡" + total.toLocaleString();
}

// --- ELIMINAR PRODUCTO DEL CARRITO ---
function eliminarDelCarrito(index) {
  carrito.splice(index, 1);
  actualizarCarrito();
  mostrarCarrito();
}

// --- FINALIZAR COMPRA ---
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }
  alert("¡Compra realizada con éxito! 🎉");
  carrito = [];
  actualizarCarrito();
  mostrar
}
  document.getElementById("carrito-total").text}


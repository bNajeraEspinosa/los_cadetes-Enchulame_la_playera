import { refreshCartLength } from "./services/local-cart.service.js";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from "./services/local-storage.service.js";
import { formatCurrency } from "./utils/format-currency.js";
import { getProductInfo } from "./services/products.service.js";

const finalizarCompra = document.getElementById("finalizarCompra");
const totalProceso = document.getElementById("totalProceso");
const toastLiveExample = document.getElementById("liveToast");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const listaCompra = document.getElementById("listaCompra");

//Función para mostrar la lista de productos en compras.html
function procesarPedido(carrito) {
  if (!carrito || carrito.length === 0) {
    const row = document.createElement("div");
    row.classList.add("row", "my-2");
    row.innerHTML += `
            <div class="col d-flex justify-content-center">
                <h5>Tu carrito está vacío</h5>
            </div>
            <div class="col d-flex justify-content-center">
                <p>¿No sabes qué comprar? ¡Miles de productos te esperan!</p>
            </div>
        `;
    listaCompra.appendChild(row);
  } else {
    carrito.forEach((prod) => {
      const { id, quantity } = prod;
      const row = document.createElement("div");
      row.classList.add("row", "my-2");

      document.addEventListener("click", function (e) {
        const btn = e.target?.closest("button");
        if (!btn) return;
        if (btn.id === `btnReduceQuantity-${id}`) reducirCantidad(id);
        if (btn.id === `btnAddQuantity-${id}`) aumentarCantidad(id);
      });

      row.innerHTML += `
            <div class="col-12 col-md-7 d-flex">
                <div class="col-3">
                    <img src="https://via.placeholder.com/75">
                </div>
                <div class="col-9">
                    ${"Sin descripción"}
                </div>
            </div>
            <div class="col-3 col-md-3">
                <button id="btnReduceQuantity-${id}" class="btn btn-orange p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-dash" viewBox="0 0 16 18"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path></svg>
                </button>
                <span class="px-1" id="spanCantidad${id}">${quantity}</span>
                <button id="btnAddQuantity-${id}" class="btn btn-orange p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-plus" viewBox="0 0 16 18"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path></svg>
                </button>
            </div>
            <div class="col-9 col-md-2">
                $100
            </div>
        `;
      listaCompra.appendChild(row);
    });
  }
  const total = carrito.reduce(
    (acc, prod) => acc + prod.price * prod.cantidad,
    0
  );
  totalProceso.innerText = formatCurrency({ format: "mxn", amount: total });
}

function aumentarCantidad(id) {
  const carrito = getFromLocalStorage("cart") ?? [];
  const item = carrito.find((prod) => prod.id === id);
  if (!item) return;
  item.quantity++;
  let stringCantidad = `spanCantidad${id}`;
  const spanCantidad = document.getElementById(stringCantidad);
  spanCantidad.innerText = item.quantity;

  setInLocalStorage("cart", carrito);
}

function reducirCantidad(id) {
  let carrito = getFromLocalStorage("cart") ?? [];

  const item = carrito.find((prod) => prod.id === id);
  if (!item) return;
  if (item.quantity === 1) {
    carrito = carrito.filter((prod) => prod.id !== id);
    listaCompra.replaceChildren();
    procesarPedido(carrito);
  } else {
    item.quantity--;
    let stringCantidad = `spanCantidad${id}`;
    const spanCantidad = document.getElementById(stringCantidad);
    spanCantidad.innerText = item.quantity;
  }
  setInLocalStorage("cart", carrito);
}

//Función para crear los elementos de la alerta de acuerdo al mensaje
const alerta = (encabezado, cuerpo, tipoEncab, svg) => {
  const contAlerta = document.createElement("div"); //creación del div
  contAlerta.innerHTML = [
    //HTML del nuevo div
    `<div class="toast-header text-${tipoEncab}" id="encabToast">`,
    `<img src="${svg}" class="rounded me-2">`,
    `<strong class="me-auto">${encabezado}</strong>`,
    '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>',
    "</div>",
    `<div class="toast-body text-dark" id="cuerpoToast">${cuerpo}</div>`,
  ].join(""); //Unión de los elementos del arreglo en una cadena
  toastLiveExample?.append(contAlerta); //Se agrega nuevo div dentro de otro div

  const toast = new bootstrap.Toast(toastLiveExample); //Se instancía toast

  toast.show(); //Se muestra toast
};

//Función para eliminar los elementos HTML del toast y evitar acumulación
const remover = () => {
  const encabezadoA = document.getElementById("encabToast");
  const cuerpoA = document.getElementById("cuerpoToast");
  encabezadoA.remove();
  cuerpoA.remove();
};

//Aqui ejecutamos nuestra función fetchData
document.addEventListener("DOMContentLoaded", () => {
  const carrito = getFromLocalStorage("cart") ?? [];
  procesarPedido(carrito);
});

//Funcionamiento de botón Finalizar Compra. En compras.html
finalizarCompra.addEventListener("click", () => {
  //Al hacer click en botón se realiza la función
  const carrito = getFromLocalStorage("cart") ?? [];

  if (carrito.length === 0) {
    alerta(
      "¡CARRITO VACÍO!",
      "Agrega artículos a tu carrito",
      "danger",
      "/assets/icons/x-circle-fill.svg"
    ); //Alerta de error
    setTimeout(remover, 6000);
  } else {
    localStorage.removeItem("carrito");
    carrito = [];
    listaCompra.replaceChildren();
    procesarPedido();
    alerta(
      "¡GRACIAS POR ELEGIRNOS PARA ENCHULAR TU PLAYERA!",
      "Hemos recibido tu pedido y pronto recibirás tu playera",
      "success",
      "/assets/icons/check-circle-fill.svg"
    ); //Alerta de éxito
    setTimeout(remover, 6000); //Función con delay para eliminar HTML de la alerta y evitar acumulación
  }
});

vaciarCarrito.addEventListener("click", () => {
  //Al hacer click en botón se realiza la función
  const cart = getFromLocalStorage("cart") ?? [];
  if (cart.length === 0) return;
  removeFromLocalStorage("cart");
  listaCompra.replaceChildren();
  procesarPedido();
  refreshCartLength(0);
});

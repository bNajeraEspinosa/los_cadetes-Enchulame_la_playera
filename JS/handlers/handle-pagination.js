import { addProductToCart } from "../services/local-cart.service.js";
import { formatCurrency } from "../utils/format-currency.js";

const list_element = document.getElementById("items");

//total de items
let current_page = 1;
let rows = 12;

export const displayList = (items, wrapper, rows_per_page, page) => {
  wrapper.innerHTML = "";
  //aqui declaramo que la pag tendra un decendente
  page--;

  //Inicio de los items en 0 y se contara por pagina
  //(row =5) * (page = 0)= 0  aqui vemos en que index se inicia
  let start = rows_per_page * page;
  //(page = 0) + (row_per_page = 5) y cuantos items se enseñan
  let end = start + rows_per_page;

  let paginatedItems = items.slice(start, end);
  // Recorrer el arreglo de productos
  const productList = paginatedItems.map((producto) =>
    createProductCard(producto)
  );
  wrapper.innerHTML = productList.join("");
};

export const setupPagination = (items, wrapper, rows_per_page) => {
  wrapper.innerHTML = "";

  //Math.ceil redonde hacia arriba cualquier numero
  //aqui sacamos los botones dividiendo items/rows
  let page_count = Math.ceil(items.length / rows_per_page);

  //page_conunt(22/5)=4.4 y redonde a 5
  //esto es lo que hace dinámica los botones de la paginación
  for (let i = 1; i < page_count + 1; i++) {
    let btn = paginationButton(i, items);
    wrapper.appendChild(btn);
  }
};

export const paginationButton = (page, items) => {
  let button = document.createElement("button");
  let li = document.createElement("li");

  li.classList.add("page-item");
  button.classList.add(
    "btn",
    "btn-outline-dark",
    "text-secondary",
    "btn-lg",
    "fs-bold",
    "bg-black"
  );

  li.appendChild(button);

  button.innerText = page;

  if (current_page == page) {
    button.classList.remove("bg-black");
    button.classList.add("active", "bg-dark");
  }

  button.addEventListener("click", function () {
    current_page = page;
    displayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector("button.active");
    current_btn.classList.add("bg-black");
    current_btn.classList.remove("active", "bg-dark");

    button.classList.remove("bg-black");
    button.classList.add("active", "bg-dark");
  });

  return button;
};

const createProductCard = ({ id, name, image, price }) => {
  document.addEventListener("click", function (e) {
    if (e.target && e.target.id === `btnAddToCart-${id}`) {
      addProductToCart(id);
    }
  });

  const priceFormatted = formatCurrency({ amount: price, format: "mxn" });

  return `
    <div class="d-flex flex-column px-3 col-12 col-sm-6 col-lg-4">
      <div class="card text-white text-center bg-dark py-3 flex-grow-1">
        <div class="card-header flex-grow-1">
          <h5>${name}</h5>
        </div>
        <a href="/html/producto-info.html?id=${id}" class="link-light text-decoration-none">
          <div class="card-body p-0">
            <img
              src="${image}"
              alt="${name}-img"
              class="card-img-top w-50 my-3 img-fluid"
            />
            <p class="fs-4 fw-bold">${priceFormatted}</p>
          </div>
        </a>
        <div class="card-footer d-flex flex-column gap-2 flex-md-row">
          <button id="btnAddToCart-${id}" class="btn fs-6 btn-black flex-grow-1">
            Agregar al carrito
          </button>
          <button class="btn fs-6 btn-orange flex-grow-1 text-white">
            Comprar
          </button>
        </div>
      </div>
    </div>
  `;
};

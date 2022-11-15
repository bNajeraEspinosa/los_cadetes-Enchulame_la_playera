const list_element = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;

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
  const fragmento = document.createDocumentFragment();
  paginatedItems.forEach((producto) => {
    templateCard.getElementById("name").textContent = producto.name;
    templateCard.getElementById("img").setAttribute("src", producto.img);
    templateCard
      .getElementById("url")
      .setAttribute("href", `/html/producto-info.html?id=${producto.id}`);
    templateCard.getElementById("price").textContent = producto.price;
    templateCard.getElementById("description_short").textContent =
      producto.description_short;
    const clonar = templateCard.cloneNode(true);
    fragmento.appendChild(clonar);
  });

  wrapper.appendChild(fragmento);
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
    "fs-bold"
  );

  li.appendChild(button);

  button.innerText = page;

  if (current_page == page) button.classList.add("active");

  button.addEventListener("click", function () {
    current_page = page;
    displayList(items, list_element, rows, current_page);

    let current_btn = document.querySelector("button.active");
    current_btn.classList.remove("active");

    button.classList.add("active");
  });

  return button;
};

import { getListProducts } from "./services/products.service.js";
import { showAlert } from "./handlers/handle-alert.js";

const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;

const showProducts = (data) => {
  // Limpiar el HTML
  const objPlaceholder = document.getElementById("items");
  objPlaceholder.replaceChildren();

  // Recorrer el arreglo de productos
  const fragmento = document.createDocumentFragment();
  data.forEach((producto) => {
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

  // Agregar el HTML
  items.appendChild(fragmento);
};

const fetchData = async () => {
  try {
    const data = await getListProducts();
    showProducts(data);
  } catch (error) {
    showAlert({ status: "error", message: error?.message });
  }
};

//Aqui ejecutamos nuestra función fetchData
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

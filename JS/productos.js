import { displayList, setupPagination } from "./handlers/handle-pagination.js";

import { getListProducts } from "./services/products.service.js";
import { showAlert } from "./handlers/handle-alert.js";

const fetchData = async () => {
  try {
    const data = await getListProducts();
    displayList(data, document.getElementById("items"), 12, 1);
    setupPagination(data, document.getElementById("pagination"), 12);
  } catch (error) {
    showAlert({ status: "error", message: error?.message });
  }
};

//Aqui ejecutamos nuestra función fetchData
document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

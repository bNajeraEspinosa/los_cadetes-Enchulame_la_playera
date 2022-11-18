import {
  hideImgLoading,
  hideLoading,
  showAlert,
  showImgLoading,
  showLoading,
} from "./handlers/handle-alert.js";
import { handleSubmitForm } from "./handlers/handle-submit-form.js";
import {
  createProduct,
  getAllProductsCategories,
  getAllProductsColors,
  getAllProductsSizes,
} from "./services/products.service.js";

export const crearProducto = async (event) => {
  event.preventDefault();
  const currentForm = event.currentTarget;

  const formData = handleSubmitForm(currentForm);
  if (!formData) return;

  try {
    showLoading();
    const data = await createProduct(formData);
    console.log({ data });
    showAlert({ status: "success", message: "Producto creado exitosamente" });
    currentForm.reset();
  } catch (err) {
    showAlert({ status: "error", message: err?.message });
  } finally {
    hideLoading();
  }
};

document.addEventListener("DOMContentLoaded", async () => {
  const categorySelect = document.querySelector("#category");
  const colorSelect = document.querySelector("#colors");
  const sizeSelect = document.querySelector("#sizes");

  const imgInput = document.querySelector("#img");
  const imgContainer = document.querySelector("#img-container");

  imgInput.addEventListener("change", (e) => {
    const value = e.target.value;
    imgContainer.classList.add("d-none");
    showImgLoading();

    const img = document.querySelector("#img-preview");
    img.src = value;
    img.addEventListener("load", () => {
      hideImgLoading();
      imgContainer.classList.remove("d-none");
    });
  });

  const categories = await getAllProductsCategories();
  const colors = await getAllProductsColors();
  const sizes = await getAllProductsSizes();

  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category.id;
    option.textContent = category.name;
    categorySelect.appendChild(option);
  });

  colors.forEach((color) => {
    const option = document.createElement("option");
    option.value = color.id;
    option.textContent = color.name;
    colorSelect.appendChild(option);
  });

  sizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = size.id;
    option.textContent = size.name;
    sizeSelect.appendChild(option);
  });
});

const formElement = document.getElementById("form-create-products");
formElement?.addEventListener("submit", crearProducto);

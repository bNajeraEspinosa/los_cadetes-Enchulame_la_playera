import {
  hideLoading,
  showAlert,
  showLoading,
} from "./handlers/handle-alert.js";
import { handleSubmitForm } from "./handlers/handle-submit-form.js";
import { createProduct } from "./services/products.service.js";

export const crearProducto = async (event) => {
  event.preventDefault();
  const currentForm = event.currentTarget;

  const formData = handleSubmitForm(currentForm);
  if (!formData) return;

  try {
    showLoading();
    const data = await createProduct(formData);
    showAlert({ status: "success", message: data?.message });
    currentForm.reset();
  } catch (err) {
    showAlert({ status: "error", message: err?.message });
  } finally {
    hideLoading();
  }
};

const formElement = document.getElementById("form-create-products");
formElement?.addEventListener("submit", crearProducto);

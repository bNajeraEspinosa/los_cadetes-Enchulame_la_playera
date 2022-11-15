import {
  hideLoading,
  showAlert,
  showLoading,
} from "./handlers/handle-alert.js";
import { handleSubmitForm } from "./handlers/handle-submit-form.js";
import { loginUser } from "./services/auth.service.js";
import { setInLocalStorage } from "./services/local-storage.service.js";

export const login = async (event) => {
  event.preventDefault();
  const currentForm = event.currentTarget;
  const formData = handleSubmitForm(currentForm);
  if (!formData) return;

  try {
    showLoading();
    const userData = await loginUser(formData);
    setInLocalStorage("cur_user", userData);
    currentForm.reset();
    location.href = "/index.html";
  } catch (error) {
    showAlert({ status: "error", message: error?.message });
  } finally {
    hideLoading();
  }
};
const formElement = document.getElementById("login-form");
formElement?.addEventListener("submit", login);

import {
  hideLoading,
  showAlert,
  showLoading,
} from "./handlers/handle-alert.js";
import { handleSubmitForm } from "./handlers/handle-submit-form.js";
import { registerUser } from "./services/auth.service.js";
import { setInLocalStorage } from "./services/local-storage.service.js";

export const submitRegister = async (e) => {
  e.preventDefault();
  const currentForm = e.currentTarget;
  const formData = handleSubmitForm(currentForm);
  if (!formData) return;
  try {
    showLoading();
    const data = await registerUser(formData);
    setInLocalStorage("cur_user", data);
    currentForm.reset();
    window.location.href = "/index.html";
  } catch (error) {
    showAlert({ status: "error", message: error?.message });
  } finally {
    hideLoading();
  }
};

const formElement = document.getElementById("register-form");
formElement?.addEventListener("submit", submitRegister);

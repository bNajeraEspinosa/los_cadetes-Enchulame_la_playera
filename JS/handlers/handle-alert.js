import { createAlert } from "../components/alert.js";

export const showAlert = ({ status, message }) => {
  const container = document.getElementById("liveToast");
  container?.replaceChildren();

  const alertComponent = createAlert({ status, message });
  container?.append(alertComponent); //Se agrega nuevo div dentro de otro div

  const toast = new bootstrap.Toast(container); //Se instancía toast
  toast?.show();
};

export const showLoading = () => {
  const loaderElement = document.getElementById("notify-form-loader");
  loaderElement?.classList.remove("d-none");
};

export const hideLoading = () => {
  const loaderElement = document.getElementById("notify-form-loader");
  loaderElement?.classList.add("d-none");
};

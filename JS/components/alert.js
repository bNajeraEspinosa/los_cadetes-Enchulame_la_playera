const statuses = {
  success: {
    title: "Success",
    icon: "/assets/icons/check-circle-fill.svg",
    variant: "success",
  },
  error: {
    title: "Error",
    icon: "/assets/icons/x-circle-fill.svg",
    variant: "danger",
  },
};

export const createAlert = ({ status, message }) => {
  const info = statuses[status];

  const contAlerta = document.createElement("div");
  contAlerta.innerHTML = [
    //HTML del nuevo div
    `<div class="toast-header text-${info.variant}">`,
    `<img src="${info.icon}" class="rounded me-2">`,
    `<strong class="me-auto">${info.title}</strong>`,
    '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>',
    "</div>",
    `<div class="toast-body text-dark">${message ?? ""}</div>`,
  ].join(""); //Unión de los elementos del arreglo en una cadena
  return contAlerta;
};

import { ROUTES } from "./routes.js";

export const NAV_LINKS = [
  {
    path: ROUTES.HOME,
    label: "Home",
  },
  {
    path: ROUTES.PRODUCTS,
    label: "Productos",
  },
  {
    path: ROUTES.CONTACT,
    label: "Contactanos",
  },
  {
    path: ROUTES.ABOUT_US,
    label: "Nosotros",
  },
];

export const CART = {
  label: "Carrito",
  icon: "cart-fill.svg",
};
export const PROFILE = {
  icon: "/assets/icons/person-circle.svg",
  label: "Perfil",
  list: {
    offline: [
      `<li><a class="dropdown-item" href="${ROUTES.LOGIN}">Iniciar sesión</a></li>`,
      `<li><a class="dropdown-item" href="${ROUTES.REGISTER}">Registrarse</a></li>`,
    ],
    online: [
      `<li><a class="dropdown-item" href="/html/create-product.html">Crear Producto</a></li>`,
      `<li><button class="btn dropdown-item" id="btn-logout">Cerrar sesión</button></li>`,
    ],
  },
};

import {
  getFromLocalStorage,
  setInLocalStorage,
} from "./local-storage.service.js";

export const addProductToCart = (id) => {
  const cart = getFromLocalStorage("cart") || [];

  const product = cart.find((item) => item.id === id);

  if (product) {
    //Si el producto ya se encuentra dentro del arreglo carrito
    product.quantity++;
  } else {
    //Si el producto no existe dentro del arreglo
    const modelProductCart = { id, quantity: 1 };
    cart.push(modelProductCart); //Agrega el producto al arreglo carrito
    refreshCartLength(cart.length);
  }
  setInLocalStorage("cart", cart);
};

export const refreshCartLength = (cartLength) =>
  (document.getElementById("cart-total").innerText = cartLength);

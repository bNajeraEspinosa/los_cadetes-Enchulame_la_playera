import {
  hideLoading,
  showAlert,
  showLoading,
} from "./handlers/handle-alert.js";
import { getProductInfo } from "./services/products.service.js";
import { addProductToCart } from "./services/local-cart.service.js";

const loadProductInfo = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const btnAddToCart = document.getElementById("btnAddToCart");

  btnAddToCart.addEventListener("click", () => {
    addProductToCart(productId);
  });

  try {
    showLoading();
    const productData = await getProductInfo({ id: productId });
    showProductInfo(productData);
  } catch (error) {
    showAlert({ status: "error", message: error?.message });
  } finally {
    hideLoading();
  }
};

const showProductInfo = (productData) => {
  const productImg = document.getElementById("product-img");
  const productTitle = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");

  console.log(productData);

  productImg.src = productData.image;
  productTitle.textContent = productData.name;
  productPrice.textContent = productData.price;
};

loadProductInfo();

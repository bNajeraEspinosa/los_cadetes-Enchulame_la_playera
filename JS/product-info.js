import { showAlert } from "./handlers/handle-alert.js";
import { getProductInfo } from "./services/products.service.js";

const loadProductInfo = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  try {
    const productData = await getProductInfo({ id: productId });
    showProductInfo(productData);
  } catch (error) {
    showAlert({ status: "error", message: error?.message });
  }
};

const showProductInfo = (productData) => {
  const productImg = document.getElementById("product-img");
  const productTitle = document.getElementById("product-name");
  const productPrice = document.getElementById("product-price");

  productImg.src = productData.img;
  productTitle.textContent = productData.name;
  productPrice.textContent = productData.price;
};

loadProductInfo();

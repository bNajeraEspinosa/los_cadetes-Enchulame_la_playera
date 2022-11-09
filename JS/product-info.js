const productImg = document.getElementById("product-img");
const productTitle = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");

const loadProductInfo = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  try {
    const response = await fetch(
      `https://mockend.com/alaanescobedo/db-server/products/${productId}`
    );
    const productData = await response.json();

    productImg.src = productData.img;
    productTitle.textContent = productData.name;
    productPrice.textContent = productData.price;
  } catch (error) {
    console.log(error);
  }
};
loadProductInfo();

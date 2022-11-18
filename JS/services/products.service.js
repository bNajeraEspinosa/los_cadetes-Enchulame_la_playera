import { ENDPOINTS } from "../constants/endpoints.js";

export const createProduct = async ({
  name,
  colors,
  sizes,
  price,
  img,
  stock,
  category,
}) => {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCTS}`, {
      method: "POST",
      body: JSON.stringify({
        name,
        colors,
        sizes,
        price,
        img,
        stock,
        category,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getListProducts = async () => {
  try {
    const res = await fetch(`${ENDPOINTS.PRODUCTS}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    });
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const getProductInfo = async ({ id }) => {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCTS}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllProductsCategories = async () => {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCT_CATEGORY}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllProductsColors = async () => {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCT_COLOR}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getAllProductsSizes = async () => {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCT_SIZE}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

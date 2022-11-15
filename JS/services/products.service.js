import { ENDPOINTS } from "../constants/endpoints.js";

export const createProduct = async ({
  name,
  descriptionShort,
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
        descriptionShort,
        price,
        img,
        stock,
        category,
      }),
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getListProducts = async ({ limit } = { limit: 12 }) => {
  try {
    const res = await fetch(`${ENDPOINTS.PRODUCTS}?limit=${limit}`);
    return await res.json();
  } catch (error) {
    throw error;
  }
};

export const getProductInfo = async ({ id }) => {
  try {
    const response = await fetch(`${ENDPOINTS.PRODUCTS}/${id}`);
    return await response.json();
  } catch (error) {
    throw error;
  }
};

import { ENDPOINTS } from "../constants/endpoints.js";

export const registerUser = async ({
  firstName,
  lastName,
  username,
  email,
  password,
  passwordConfirm,
  phone,
}) => {
  try {
    const response = await fetch(`${ENDPOINTS.AUTH_USER}`, {
      body: JSON.stringify({
        firstName,
        lastName,
        username,
        email,
        password,
        passwordConfirm,
        phone,
      }),
      method: "POST",
    });
    return response.json();
  } catch (error) {
    throw error;
  }
};

export const loginUser = async ({ username, password }) => {
  try {
    const response = await fetch(`${ENDPOINTS.AUTH_USER}/login`, {
      body: JSON.stringify({ username, password }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
};

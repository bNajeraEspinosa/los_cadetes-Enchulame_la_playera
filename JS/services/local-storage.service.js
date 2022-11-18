export const setInLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromLocalStorage = (key) =>
  JSON.parse(localStorage.getItem(key));

export const removeFromLocalStorage = (key) => localStorage.removeItem(key);

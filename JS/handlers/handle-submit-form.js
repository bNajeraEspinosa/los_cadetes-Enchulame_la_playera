export const handleSubmitForm = (form) => {
  const isValid = form.checkValidity();
  if (!isValid) return form.classList.add("was-validated");
  form.classList.remove("was-validated");

  return Object.fromEntries(new FormData(form)) ?? null;
};

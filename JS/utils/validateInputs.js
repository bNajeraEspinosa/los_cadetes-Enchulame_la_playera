export const validateInputs = (inputs) => {
  const validInputs = inputs.filter((input) => {
      input.checkValidity() ? input.classList.remove('was-validated') : input.classList.add('was-validated')
      return input.checkValidity();
  });
  return validInputs.length === inputs.length;
}
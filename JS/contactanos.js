import { getElement, getAllElements, validateInputs } from './utils/index.js'

const formElement = getElement('#formularioCont');
const inputsElement = getAllElements('.needs-validation');

const submitForm = (event) => {
    //Prevenir recarga de la página
    event.preventDefault();

    // Validar el formulario
    const isValid = validateInputs(Array.from(inputsElement));
    if (!isValid) return;

    // Capturar los datos del formulario
    const data = Object.fromEntries(new FormData(formElement));

    formElement.reset();
}

formElement.addEventListener("submit", submitForm);

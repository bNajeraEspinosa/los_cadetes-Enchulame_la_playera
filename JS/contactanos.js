//Se leen todos los elementos del formulario
const formulario = document.getElementById("formularioCont");

//Función async para validar formulario y fetch
export const submitContactanos = async (event) => {
    //Se evita la carga de la página
    event.preventDefault();
    const formulario = event.currentTarget;

    // Validación del formulario
    const isValid = formulario.checkValidity();
    if (!isValid) return formulario.classList.add('was-validated');
    formulario.classList.remove('was-validated');

    //Conversión de las entradas del formulario a objeto con atributos
    const data = Object.fromEntries(new FormData(formulario));


    formulario.reset();
}

formulario?.addEventListener("submit", submitContactanos);
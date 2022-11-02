const formulario=document.getElementById("form-create-products");

console.log(formulario);

const crearProducto = (event) => {
    //Se evita la carga de la página
    event.preventDefault();

    // Validación del formulario
    const isValid = formulario.checkValidity();
    console.log(isValid);
    if (!isValid) return formulario.classList.add('was-validated');
    formulario.classList.remove('was-validated');

}

formulario.addEventListener("submit", crearProducto);
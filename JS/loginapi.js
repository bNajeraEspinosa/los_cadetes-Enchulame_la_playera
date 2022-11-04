//Se leen todos los elementos del formulario
const formulario = document.getElementById("login-form");

//Función async para validar formulario y fetch
const añadirUsuario = async (event) => {
    //Se evita la carga de la página
    event.preventDefault();
    const formulario = event.currentTarget;

    // Validación del formulario
    const isValid = formulario.checkValidity();
    if (!isValid) return formulario.classList.add('was-validated');
    formulario.classList.remove('was-validated');

    //Conversión de las entradas del formulario a objeto con atributos
    const data = Object.fromEntries(new FormData(formulario));

    //Fetch con try/catch
    try { //Tratará guardar en response después de esperar el fetch
        let response = await fetch("https://reqres.in/api/users", {
            method: "POST", //Se configura el método POST
            body: JSON.stringify(data) //Valores de formulario convertido a JSON
        })
    } catch (err) {
        console.log("error")
    }
    //Limpieza del formulario
    formulario.reset();


    formulario?.addEventListener("submit", añadirUsuario);
}
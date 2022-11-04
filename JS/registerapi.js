/* GOOGLE SIGN IN
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  } */

//Se leen todos los elementos del formulario
const formulario = document.getElementById("login-form");
//Se lee el elemento para la alerta de producto registrado
const toastLiveExample = document.getElementById('liveToast');

//Función para crear los elementos de la alerta de acuerdo al mensaje
const alerta = (encabezado, cuerpo, tipoEncab, svg) => {
    const contAlerta = document.createElement('div') //creación del div
    contAlerta.innerHTML = [ //HTML del nuevo div
        `<div class="toast-header text-${tipoEncab}" id="encabToast">`,
        `<img src="${svg}" class="rounded me-2">`,
        `<strong class="me-auto">${encabezado}</strong>`,
        '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>',
        '</div>',
        `<div class="toast-body text-dark" id="cuerpoToast">${cuerpo}</div>`
    ].join('') //Unión de los elementos del arreglo en una cadena
    toastLiveExample?.append(contAlerta) //Se agrega nuevo div dentro de otro div

    const toast = new bootstrap.Toast(toastLiveExample) //Se instancía toast

    toast.show() //Se muestra toast
}

//Función para eliminar los elementos HTML del toast y evitar acumulación
const remover = () => {
    const encabezadoA = document.getElementById('encabToast');
    const cuerpoA = document.getElementById('cuerpoToast');
    encabezadoA.remove();
    cuerpoA.remove();
}

//Función async para validar formulario y fetch
export const crearProducto = async (event) => {
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
        });
        let json = await response.json() //Espera respuesta, convierte json a objeto
        alerta("REGISTRO EXITOSO", "¡Te has registrado correctamente!", "success", "/assets/icons/check-circle-fill.svg"); //Alerta de registro exitoso
    } catch (err) { //catch en caso de error
        alerta("¡HUBO UN ERROR!", `Error al registrar producto. ${err}`, "danger", "/assets/icons/x-circle-fill.svg"); //Alerta de error
        setTimeout(remover, 6000);
    }
    //Limpieza del formulario
    formulario.reset();
}

formulario?.addEventListener("submit", crearProducto);
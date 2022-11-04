/* GOOGLE SIGN IN
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
  } */

(() => {
    'use strict'
    // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
    const forms = document.querySelectorAll('.needs-validation');
    // Bucle sobre los campos para evitar el envío
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            //Si la validación arroja falso no se enviará el registro
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else { //Si la validación arroja verdadero se hará el guardado de los datos ingresados en los inputs
                const objFormCont = document.forms["login-form"];
                let correo = objFormCont.elements['email'].value;
                let contraseña = objFormCont.elements['password'].value;

                // Impresión en consola para verificar
                console.log("Email: " + correo);
                console.log("Contraseña: " + contraseña);

                localStorage.set("login-form",JSON.stringify(correo, contraseña));
                var credentials = JSON.parse(localStorage.get("items"));
                console.log(credentials.inputs);
            }
            form.classList.add('was-validated');
        }, false)
    });
})();
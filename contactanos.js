// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

const objFormCont = document.forms["formularioCont"];

// (evento, función callback)
objFormCont.addEventListener('submit', event => {
    event.preventDefault();
    console.log("El evento submit se ha generado");
    let nombreCont = objFormCont.elements['input-nombre-contactanos'].value;
    let apellidoCont = objFormCont.elements['input-apellido-contactanos'].value;
    let correoCont = objFormCont.elements['input-correo-contactanos'].value;
    let telCont = objFormCont.elements['input-tel-contactanos'].value;
    let mensCont = objFormCont.elements['input-mensaje-contactanos'].value;
    console.log("Nombre: "+ nombreCont);
    console.log("Apellido: "+ apellidoCont);
    console.log("Correo: "+ correoCont);
    console.log("Teléfono: "+ telCont);
    console.log("Mensaje: "+ mensCont);
}); 
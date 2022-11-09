// JavaScript de inicio para deshabilitar el envío de formularios si hay campos no válidos
(() => {
  "use strict";

  // Obtener todos los formularios a los que queremos aplicar estilos de validación de Bootstrap personalizados
  const forms = document.querySelectorAll(".needs-validation");

  // Bucle sobre los campos para evitar el envío
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        //Si la validación arroja falso no se enviará el registro
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          //Si la validación arroja verdadero se hará el guardado de los datos ingresados en los inputs
          //
          const objFormCont = document.forms["formularioCont"];
          let nombreCont =
            objFormCont.elements["input-nombre-contactanos"].value;
          let apellidoCont =
            objFormCont.elements["input-apellido-contactanos"].value;
          let correoCont =
            objFormCont.elements["input-correo-contactanos"].value;
          let telCont = objFormCont.elements["input-tel-contactanos"].value;
          let mensCont =
            objFormCont.elements["input-mensaje-contactanos"].value;
          // Impresión en consola para verificar
          console.log("Nombre: " + nombreCont);
          console.log("Apellido: " + apellidoCont);
          console.log("Correo: " + correoCont);
          console.log("Teléfono: " + telCont);
          console.log("Mensaje: " + mensCont);
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

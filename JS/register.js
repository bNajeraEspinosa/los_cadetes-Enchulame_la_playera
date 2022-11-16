const formElement = document.getElementById("register-form");

export const submitRegister = async (e) => {
  e.preventDefault();

  const currentForm = e.currentTarget;

  const isValid = currentForm.checkValidity();
  if (!isValid) return currentForm.classList.add("was-validated");
  currentForm.classList.remove("was-validated");

  const data = Object.fromEntries(new FormData(currentForm));

  try {
    const response = await fetch(
      "https://mockend.com/alaanescobedo/db-server/users",
      {
        body: JSON.stringify(data),
        method: "POST",
      }
    );
    const userData = await response.json();

    localStorage.setItem("cur_user", JSON.stringify(userData));
    currentForm.reset();
    window.location.href = "/index.html";
  } catch (error) {
    console.log(error);
  }
};
formElement?.addEventListener("submit", submitRegister);

/* inicio de validación de formulario */

const formulario = document.getElementById('register-form');
const inputs = document.querySelectorAll('#register-form input');

/* expresiones regulares */
const expresiones = {
	fullName: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{4,12}$/, // 4 a 12 digitos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
}

const campos = {
	fullName: false, //Nombre completo del usuario
	username: false, //nombre de usuario
	email: false, //correo electrónico 
	password: false,
	confirmPassword: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "fullName":
			validarCampo(expresiones.fullName, e.target, 'fullName');
		break;

		case "username":
			validarCampo(expresiones.username, e.target, 'username');
		break;

    case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;

    case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarconfirmPassword();
		break;

		case "confirmPassword":
			validarconfirmPassword();

      break;
		
		
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('register-form__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('register-form__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('register-form__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('register-form__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('register-form__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('register-form__input-error-activo');
		campos[campo] = false;
	}
}

const validarconfirmPassword = () => {
	const inputPassword = document.getElementById('password');
	const inputconfirmPasword = document.getElementById('confirmPassword');

	if(inputPassword.value !== confirmPassword.value){
		document.getElementById(`grupo__confirmPassword`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__confirmPassword`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__confirmPassword i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__confirmPassword i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__confirmPassword .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__confirmPassword`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__confirmPassword`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__confirmPassword i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__confirmPassword i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__confirmPassword .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.fullName && campos.username && campos.email && campos.password && campos.confirmPassword && terminos.checked ){
		formulario.reset();

		document.getElementById('register-form__mensaje-exito').classList.add('register-form__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('register-form__mensaje-exito').classList.remove('register-form__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.register-form__grupo-correcto').forEach((icono) => {
			icono.classList.remove('register-form__grupo-correcto');
		});
	} else {
		document.getElementById('register-form__mensaje').classList.add('register-form__mensaje-activo');
	}
});

/* este script es para crear la función de local Storage en la pagina de registro */

//localStorage.setItem("usuario", "nombre"); //

 lst =[{ //Lista de Objetos, en este caso será la información de lxs usuarixs.
name:"Carolina Peraza",
username: "Carolina02",
email:"caro@email.com",
pasword: "Generation18",
confirmPasword: "Generation22",
telephone: "12345678"
},

{//objeto 02
name:"Carolina Peraza",
username: "Carolina02",
email:"caro@email.com",
pasword: "Generation18",
confirmPasword: "Generation22",
telephone: "12345678"
},
];

localStorage.setItem("List", JSON.stringify(lst)); 




//const form = document.getElementById("registro");
const objForm = document.forms["registro"];/** esta opcion es mejor para formularios */
                //   evento, funcion callBack, función flecha)
objForm.addEventListener('submit', event =>{
    event.preventDefault()
    console.log("El evento submit se ha generado");
   /* obtiene el valor de  correo o lo que indiquemos en la consola */
    let email = objForm.elements['fullName'].value;
    console.log(email)
    console.log(objForm.elements['username'].value);


});

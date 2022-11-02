const formulario=document.getElementById("form-create-products");

//console.log(formulario); //Impresión en consola para verificar correcta lectura del formulario

const crearProducto = (event) => {
    //Se evita la carga de la página
    event.preventDefault();

    // Validación del formulario
    const isValid = formulario.checkValidity();
    if (!isValid) return formulario.classList.add('was-validated');
    formulario.classList.remove('was-validated');

    //Conversión de las entradas del formulario a objeto con atributos
    const data=Object.fromEntries(new FormData(formulario));
    //console.log(data); //Impresión para confirmar correcto guardado de data

    //Fetch
    fetch("https://reqres.in/api/users",{ //URL de prueba
        method: "POST", //Se configura el método POST
        body: JSON.stringify(data) // El cuerpo del mensaje enviado son los datos del formulario convertido a JSON
    }).then( response => response.json() ) //La respuesta se guarda en response y se convierte de jason a objeto
    .then( json => console.log(json) ) //El objeto convertido en el paso anterior se guarda en variable json y se imprime en consola
    .catch( err => console.log(err) ); //En caso de error se imprimirá el error en consola

    //Limpieza del formulario
    formulario.reset();
}

formulario.addEventListener("submit", crearProducto);

// {name: 'Playera batman', description: 'Playera de hombre negra manga corta con diseño de batman en letras rojas', description_short: 'Playera negra manga corta batman letras ', price: '300', img: 'https://drive.google.com/file/d/1026w6Fka3jpLi1K5MgoJyRHpCBIO92J1/view', stock: '6', category: 'comics'}
// Se guardó este objeto para hacer pruebas, para probarlo sin llenar el formulario se debe copiar este código para signar el objeto en la constante data
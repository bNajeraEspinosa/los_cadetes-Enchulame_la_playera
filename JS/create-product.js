const formulario = document.getElementById("form-create-products");

const crearProducto = async (event) => {
    //Se evita la carga de la página
    event.preventDefault();

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
        let json= await response.json() //Espera la respuesta, convierte el json a objeto y guarda en json
        console.log(json); //Impresión en consola para confirmar resultado
    } catch (err) { //catch en caso de error
        console.log(err)//En caso de error se imprimirá el error en consola
    }

    //Limpieza del formulario
    formulario.reset();
}

formulario.addEventListener("submit", crearProducto);

// {name: 'Playera batman', description: 'Playera de hombre negra manga corta con diseño de batman en letras rojas', description_short: 'Playera negra manga corta batman letras ', price: '300', img: 'https://drive.google.com/file/d/1026w6Fka3jpLi1K5MgoJyRHpCBIO92J1/view', stock: '6', category: 'comics'}
// Se guardó este objeto para hacer pruebas, para probarlo sin llenar el formulario se debe copiar este código para signar el objeto en la constante data
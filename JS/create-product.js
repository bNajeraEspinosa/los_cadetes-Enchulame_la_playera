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
        let json= await response.json() //Espera respuesta, convierte json a objeto
        console.log(json); //Imprime en consola para confirmar resultado
    } catch (err) { //catch en caso de error
        console.log(err)//Imprimirá error en consola
    }

    //Limpieza del formulario
    formulario.reset();
}

formulario.addEventListener("submit", crearProducto);
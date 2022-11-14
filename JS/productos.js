const contCards = document.getElementById("contCards");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const precioTotal = document.getElementById("precioTotal");
const procesarCompra = document.getElementById("procesarCompra");
const toastLiveExample = document.getElementById("liveToast");
const activarFuncion = document.getElementById("activarFuncion");
const carritoContenedor = document.querySelector(".nav #carritoSpan");
const totalProceso = document.getElementById("totalProceso");
const finalizarCompra = document.getElementById("finalizarCompra");
let data = "";
let carrito = [];
let cantidad = 1;

//Función para agregar producto al carrito. En productos.html
function agregarProducto(id) {//Parámetro de entrada es el id
    const existe = carrito.some(prod => prod.id === id)//Evalúa si el producto ya se encuentra en el carrito

    if (existe) {//Si el producto ya se encuentra dentro del arreglo carrito
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                //prod.cantidad++;//Aumenta cantidad, para no duplicar el producto
                cantidad++;
            }
        })
    } else {//Si el producto no existe dentro del arreglo
        const item = data.find((prod) => prod.id === id);
        carrito.push(item);//Agrega el producto al arreglo carrito
    }
    mostrarCarrito();//Muestra el carrito
}

//Funcionamiento de botón Procesar Compra. En productos.html
if (procesarCompra) { //Si el elemento existe ejecutará la función
    procesarCompra.addEventListener('click', () => { //Al hacer click en botón se realiza la función
        if (carrito.length === 0) { //Si el carrito está vacío manda mensaje en pantalla
            alerta(
                "¡TU CARRITO ESTÁ VACÍO!",
                "Selecciona productos para continuar con la compra",
                "danger",
                "/assets/icons/x-circle-fill.svg"
            ); //Alerta de error
            setTimeout(remover, 6000); //Función con delay para eliminar HTML de la alerta y evitar acumulación
        } else {
            location.href = "/HTML/compra.html"; //Si el carrito tiene productos cambia de ventana
        }
    })
};

//Funcionamiento de botón Vaciar Carrito. En productos.html
if (vaciarCarrito) { //Si el elemento existe ejecutará la función
    vaciarCarrito.addEventListener('click', () => {//Al hacer click en botón se realiza la función
        cantidad = 0;
        carrito.length = [];//Reinicia arreglo del carrito
        mostrarCarrito();
    })
};

//Función para agregar producto al carrito. En productos.html y compra.html
const mostrarCarrito = () => {
    const modalBody = document.querySelector(".modal .modal-body");

    if (modalBody) {//Si elemento modal existe, se modifica html interno
        modalBody.innerHTML = "";
        carrito.forEach((prod) => {
            const { id, name, img, price } = prod;
            modalBody.innerHTML += `
                <div class="modal-contenedor d-flex align-items-center">
                    <div class="col-3 mx-1">
                        <img class="img-fluid img-carrito" src="${img}"/>
                    </div>
                    <div class="col-9 ms-2 my-3">
                        <p>${name}</p>
                        <p>Cantidad: ${cantidad}</p>
                        <p>$${price}MXN</p>
                        <button onclick="eliminarProducto(${id})" class="btn fs-6 btn-orange flex-grow-1 text-white">Eliminar producto</button>
                    </div>
                </div>
        `
        });
    }
    if (carrito.length === 0) { //Si carrito está vacío, muestra mensaje en cuerpo de modal
        modalBody.innerHTML = '<p class="text-center text-danger">¡Agrega productos a tu carrito!</p>';
    }
    //carritoContenedor.textContent = carrito.length;

    if (precioTotal) {//si existe precioTotal cambia el texto dentro del HTML
        precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }
    guardarStorage();//Guarda en local storage
}

//Función para eliminar producto del carrito
function eliminarProducto(id) {
    //Filtra el arreglo, arroja los productos diferentes al elegido
    carrito = carrito.filter((juego) => juego.id !== id);
    mostrarCarrito();
}

//Función para guardar en local storage
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Función para mostrar la lista de productos en compras.html
function procesarPedido() {
    carrito.forEach(prod => {
        const listaCompra = document.getElementById("listaCompra");
        const { description_short, img, price } = prod;
        const row = document.createElement('row');
        row.innerHTML += `
            <div class="col-7 col-md-12 d-flex border border-danger">
                <div class="col-3 border border-danger">
                    <img class="img-fluid" src="${img}">
                </div>
                <div class="col-9 border border-danger">
                    ${description_short}
                </div>
            </div>
            <div class="col-3 col-md-4 border border-danger">
            <button type="button" class="btn btn-orange p-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-dash" viewBox="0 0 16 18">
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"></path>
            </svg></button>
            <span>${cantidad}</span>
            <button type="button" class="btn btn-orange p-0"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-plus" viewBox="0 0 16 18"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"></path>
            </svg></button>
            </div>
            <div class="col-2 col-md-8 border border-danger">
                $${price * cantidad}
            </div>
        `
        listaCompra.appendChild(row);
    })
    totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
}

//Función para crear los elementos de la alerta de acuerdo al mensaje
const alerta = (encabezado, cuerpo, tipoEncab, svg) => {
    const contAlerta = document.createElement("div"); //creación del div
    contAlerta.innerHTML = [
        //HTML del nuevo div
        `<div class="toast-header text-${tipoEncab}" id="encabToast">`,
        `<img src="${svg}" class="rounded me-2">`,
        `<strong class="me-auto">${encabezado}</strong>`,
        '<button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>',
        "</div>",
        `<div class="toast-body text-dark" id="cuerpoToast">${cuerpo}</div>`,
    ].join(""); //Unión de los elementos del arreglo en una cadena
    toastLiveExample?.append(contAlerta); //Se agrega nuevo div dentro de otro div

    const toast = new bootstrap.Toast(toastLiveExample); //Se instancía toast

    toast.show(); //Se muestra toast
};

//Función para eliminar los elementos HTML del toast y evitar acumulación
const remover = () => {
    const encabezadoA = document.getElementById("encabToast");
    const cuerpoA = document.getElementById("cuerpoToast");
    encabezadoA.remove();
    cuerpoA.remove();
};

//Función mostrar cards con artículos
const cartas = data => {
    data.forEach(producto => {
        const { id, name, price, description_short, img } = producto;
        contCards.innerHTML += `
        <div class="d-flex flex-column flex-grow-1 px-3">
        <div class="card text-white text-center bg-dark">
        <div class="card-header">
        <h5>${name}</h5>
        </div>
        <a class="link-light text-decoration-none">
        <div class="card-body p-0">
        <img src="${img}" alt="${description_short}" class="card-img-top w-50 my-3 img-fluid">
        <p>$${price}MXN</p>
        <p>${description_short}</p>
        </div>
        </a>
        <div class="card-footer d-flex flex-column gap-2 flex-md-row">
        <button onclick="agregarProducto(${id})" class="btn fs-6 btn-black flex-grow-1">Agregar al carrito</button>
        <button class="btn fs-6 btn-orange flex-grow-1 text-white">Comprar</button>
        </div>
        </div>
        </div>
        `
    })
}

//Función async fetch
const fetchData = async () => {
    try {
        const res = await fetch('https://mockend.com/alaanescobedo/db-server/products?limit=15');
        data = await res.json();
        contCards.replaceChildren();//Elimina placeholders
        cartas(data);
    } catch (error) {
        alerta(
            "¡HUBO UN ERROR!",
            `Error al cargar los productos.`,
            "danger",
            "/assets/icons/x-circle-fill.svg"
        ); //Alerta de error
        setTimeout(remover, 6000);
    }
}

//Funcionamiento de botón Finalizar Compra. En compras.html
if (finalizarCompra) { //Si el elemento existe ejecutará la función
    finalizarCompra.addEventListener('click', () => { //Al hacer click en botón se realiza la función
        alerta(
            "¡GRACIAS POR ELEGIRNOS PARA ENCHULAR TU PLAYERA!",
            "Hemos recibido tu pedido y pronto recibirás tu playera",
            "success",
            "/assets/icons/check-circle-fill.svg"
        ); //Alerta de éxito
        setTimeout(remover, 6000); //Función con delay para eliminar HTML de la alerta y evitar acumulación
    })
};

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito();
    const tituloCarrito = document.getElementById("tituloCarrito");
    if (tituloCarrito) {
        procesarPedido();
    }
    if (contCards) {
        fetchData();
    }
});


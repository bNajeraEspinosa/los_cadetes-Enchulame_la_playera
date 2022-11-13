const contCards = document.getElementById("contCards");
const vaciarCarrito = document.getElementById("vaciarCarrito");
const precioTotal = document.getElementById("precioTotal");
const procesarCompra = document.getElementById("procesarCompra");
const toastLiveExample = document.getElementById("liveToast");
let data = "";
let carrito = [];
let cantidad = 1;

procesarCompra.addEventListener('click', () => {
    if (carrito.length === 0) {
        alerta(
            "¡TU CARRITO ESTÁ VACÍO!",
            "Selecciona productos para continuar con la compra",
            "danger",
            "/assets/icons/x-circle-fill.svg"
        ); //Alerta de error
        setTimeout(remover, 6000); //Función con delay para eliminar HTML de la alerta y evitar acumulación
    } else {
        location.href = "/HTML/compra.html"
    }
})

vaciarCarrito.addEventListener('click', () => {
    cantidad = 0;
    carrito.length = [];
    mostrarCarrito();
})

function agregarProducto(id) {
    const existe = carrito.some(prod => prod.id === id)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                cantidad++;
            }
        })
    } else {
        const item = data.find((prod) => prod.id === id);
        carrito.push(item);
    }

    console.log(carrito);
    mostrarCarrito();
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body');
    const carritoContenedor = document.getElementById("carritoContenedor");

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
    if (carrito.length === 0) {
        modalBody.innerHTML = '<p class="text-center text-danger">¡Agrega productos a tu carrito!</p>';
    } else {
        console.log("Algo");
    }

    carritoContenedor.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    guardarStorage();
}

function eliminarProducto(id) {
    carrito = carrito.filter((juego) => juego.id !== id);
    console.log(carrito);
    mostrarCarrito();
}

function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
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

//Declaración función mostrar cards con artículos
const cartas = data => {
    data.forEach(producto => {
        console.log(producto);
        const { id, name, price, description_short, img } = producto;
        console.log(id);
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

//Declaración función async fetch
const fetchData = async () => {
    try {
        const res = await fetch('https://mockend.com/alaanescobedo/db-server/products?limit=15');
        data = await res.json();
        contCards.replaceChildren();//Elimina placeholders
        cartas(data);
    } catch (error) {
        console.log(error);
    }
}

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', (event) => {
    fetchData();
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCarrito();
});


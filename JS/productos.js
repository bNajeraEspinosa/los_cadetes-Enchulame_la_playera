const contCards = document.getElementById("contCards");
const toastLiveExample = document.getElementById("liveToast");
let data = "";
let carrito=[];

//Función para guardar en local storage
function guardarStorage() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

//Función para agregar producto al carrito. En productos.html
function agregarProducto(id) {//Parámetro de entrada es el id
    const existe = carrito.some(prod => prod.id === id)//Evalúa si el producto ya se encuentra en el carrito

    if (existe) {//Si el producto ya se encuentra dentro del arreglo carrito
        const prod = carrito.map(prod => {
            if (prod.id === id) {
                //prod.cantidad++;//Aumenta cantidad, para no duplicar el producto
                console.log("aumenta cantidad del artículo");
            }
        })
    } else {//Si el producto no existe dentro del arreglo
        const item = data.find((prod) => prod.id === id);
        carrito.push(item);//Agrega el producto al arreglo carrito
    }
    guardarStorage();
};

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

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
        fetchData();
});


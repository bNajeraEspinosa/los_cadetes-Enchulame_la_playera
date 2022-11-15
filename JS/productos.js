import { getListProducts } from "./services/products.service.js";
import { showAlert } from "./handlers/handle-alert.js";
const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
let jsonData = "";
let carrito;

//Función async fetch
const fetchData = async () => {
    try {
        const data = await getListProducts();
        jsonData = data;
        showProducts(data);
    } catch (error) {
        showAlert({ status: "error", message: error?.message });
    }
};

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
                prod.cantidad++;
            }
        })
    } else {//Si el producto no existe dentro del arreglo
        const item = jsonData.find((prod) => prod.id === id);
        item.cantidad = 1;
        carrito.push(item);//Agrega el producto al arreglo carrito
    }
    guardarStorage();
};

//Función para agregar producto al carrito. En productos.html
function comprarArticulo(id) {//Parámetro de entrada es el id
    agregarProducto(id); //Se agrega producto a carrito y localStorage
    //Se redirecciona a la página compra.html (SE DEBE CAMBIAR ESTE LINK)
    window.location.href = "http://127.0.0.1:5500/HTML/compra.html";
};

const showProducts = (data) => {
    // Limpiar el HTML
    const objPlaceholder = document.getElementById("items");
    objPlaceholder.replaceChildren();

    // Recorrer el arreglo de productos
    const fragmento = document.createDocumentFragment();
    data.forEach((producto) => {
        templateCard.getElementById("name").textContent = producto.name;
        templateCard.getElementById("img").setAttribute("src", producto.img);
        templateCard
            .getElementById("url")
            .setAttribute("href", `/html/producto-info.html?id=${producto.id}`);
        templateCard.getElementById("price").textContent = producto.price;
        templateCard.getElementById("description_short").textContent =
            producto.description_short;
        const clonar = templateCard.cloneNode(true);
        fragmento.appendChild(clonar);
    });

    // Agregar el HTML
    items.appendChild(fragmento);
};

//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || new Array();
    fetchData();
});

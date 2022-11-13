const contCards = document.getElementById("contCards");
let data="";
// const templateCard = document.getElementById("template-card").content;
const fragmento = document.createDocumentFragment();
const carrito=[];

function agregarProducto(id) {
    const item=data.find((prod)=>prod.id===id);
    carrito.push(item);
    mostrarCarrito();
}

const mostrarCarrito = () =>{
    const modalBody= document.querySelector('.modal .modal-body');
    
    carrito.forEach((prod)=>{
        const {id, name, img, description_short, price}=prod;
        modalBody.innerHTML=`
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src="${img}"/>
        </div>
        <div>
        <p>${name}</p>
        <p>${description_short}</p>
        <p>$${price}MXN</p>
        <button class="btn fs-6 btn-orange flex-grow-1 text-white">Eliminar</button>
        </div>
        </div>
        `
    })
}

//Declaración función mostrar cards con artículos
const cartas = data => {
    data.forEach(producto => {
        console.log(producto);
        const {id, name, price, description_short, img} = producto;
        console.log(id);
        contCards.innerHTML+=`
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
        // templateCard.getElementById("name").textContent = producto.name;
        // templateCard.getElementById("img").setAttribute("src", producto.img);
        // templateCard.getElementById("url").setAttribute("href", `/html/producto-info.html?id=${producto.id}`);
        // templateCard.getElementById("price").textContent = producto.price;
        // templateCard.getElementById("description_short").textContent = producto.description_short;
        // templateCard.getElementById("agregarCarrito").setAttribute(onclick,`agregarProducto(${producto.id})`);
        // /*  */
        // const clonar = templateCard.cloneNode(true);
        // fragmento.appendChild(clonar);
    })
    // items.appendChild(fragmento);
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
});


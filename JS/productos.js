const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragmento = document.createDocumentFragment();
//const tempPlaceholder = document.getElementById("template-placeholder").content;

////////////////////////////////////////////////////////
//Declaración función async fetch
const fetchData = async () => {
    try {
        const res = await fetch('https://mockend.com/alaanescobedo/db-server/products?limit=15');
        const data = await res.json();
        cartas(data);
    } catch (error) {
        console.log(error);
    }
}

const remover = () => {
    const objPlaceholder = document.getElementById('contPlaceholders');
    objPlaceholder.remove();
}

//Declaración función mostrar cards con artículos
const cartas = data => {
    data.forEach(producto => {
        templateCard.getElementById("name").textContent = producto.name;
        templateCard.getElementById("img").setAttribute("src", producto.img);
        templateCard.getElementById("url").setAttribute("href", `/html/producto-info.html?id=${producto.id}`);
        templateCard.getElementById("price").textContent = producto.price;
        templateCard.getElementById("description_short").textContent = producto.description_short;
        /*  */
        const clonar = templateCard.cloneNode(true);
        fragmento.appendChild(clonar);
    })
    /* console.log(fragmento); */
    items.appendChild(fragmento);

}

///////////////////////////////////////////////////////////
//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', (event) => {
    fetchData();
});
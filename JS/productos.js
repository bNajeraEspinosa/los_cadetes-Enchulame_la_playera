const items = document.getElementById("items");
const templateCard = document.getElementById("template-card").content;
const fragmento = document.createDocumentFragment();

///////////////////////////////////////////////////////////
//Aqui ejecutamos nuestra función fetchData
document.addEventListener('DOMContentLoaded', (event) => {
    fetchData();
});

//generamos función fetchData
const fetchData = async () => {
    try {
        const res = await fetch('../api.json')
        const data = await res.json()
        /*  console.log(data) */
        cartas(data)
    } catch (error) {
        console.log(error)

    }

}
////////////////////////////////////////////////////////

const cartas = data => {
    data.forEach(producto => {

        /* templateCard.getElementById("identificación").textContent = producto.id; */
        templateCard.getElementById("name").textContent = producto.name;
        templateCard.getElementById("imagen").setAttribute("src", producto.imagen);
        /* templateCard.getElementById("url").setAttribute("href", producto.url); <---- checar esta linea que coincida*/
        templateCard.getElementById("price").textContent = producto.price;
        templateCard.getElementById("by").textContent = producto.by;
        /*  */
        const clonar = templateCard.cloneNode(true);
        fragmento.appendChild(clonar);
    })
    /* console.log(fragmento); */
    items.appendChild(fragmento);

}
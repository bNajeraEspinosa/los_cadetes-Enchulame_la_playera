const items= document.getElementById("items");
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
        const res = await fetch('api.json')
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
        templateCard.getElementById('titulo').textContent = producto.name;
        templateCard.getElementById('descripción').textContent = producto.description;
        templateCard.getElementById('imagen').textContent = producto.img;


        const clonar = templateCard.cloneNode(true);
        fragmento.appendChild(clonar);
    })

    items.appendChild(fragmento);

}
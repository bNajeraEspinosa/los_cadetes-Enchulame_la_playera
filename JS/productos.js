function addItem(item) {
    const itemHTML = 
    `
    <div class="col d-flex flex-column">
        <div class="flex flex-grow-1">
            <div>
                <p class="fw-bold fs-3 m-0 my-1">${item.name}</p>
                <span class="fw-bold fs-6 d-block text-uppercase">${item.by}</span>
            </div>
            <img class="w-50 my-3 img-fluid" src="${item.img}" >
        </div>
        <div>
            <p class="fw-bold fs-3 m-0 my-1">${item.price}</p>
            <a href="${item.url}" class="btn my-3 btn-outline-secondary "> ✧ ¿Deseas ver mas detalles? ✦ </a>
        </div>
    </div>
    `


    const itemsContainer = document.getElementById("hoodieProducto");
    itemsContainer.innerHTML += itemHTML;
}




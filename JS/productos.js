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

addItem({
    name: "MANGA",
    img: "../assets/img/MANGA.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Hoodie, con diseño anime/manga"
});

addItem({
    name: "COMICS",
    img: "../assets/img/COMICS.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Hoodie, con diseño comic/superhéroe"
});

addItem({
    name: "TV SHOW",
    img: "../assets/img/TV SHOW.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Playera, con diseño cartoon/avatar"
});

addItem({
    name: "TV SHOW",
    img: "../assets/img/APPA.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Hoodie, con diseño TV SERIE/Saul G."
});

addItem({
    name: "TV SHOW",
    img: "../assets/img/AVATAR.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Playera, con diseño cartoon/avatar"
});

addItem({
    name: "FAMOUS",
    img: "../assets/img/FAMOUS.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Hoodie, con diseño Película/4th Dimention"
});

addItem({
    name: "FAMOUS",
    img: "../assets/img/BRUNO.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Playera, con Treasure... digo Bruno Mars"
});

addItem({
    name: "FAMOUS",
    img: "../assets/img/BTS.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Playera, con IDOLS... lol"
});

addItem({
    name: "RETRO",
    img: "../assets/img/RETRO.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by: "Playera, con frase letras retro"
});

addItem({
    name: "FRASES",
    img: "../assets/img/FRASE.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "/html/producto-info.html",
    price:'$300 mxn',
    by:"Playera, con frase graciosa/cool"
});




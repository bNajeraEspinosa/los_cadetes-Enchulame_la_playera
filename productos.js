"strict mode"

function addItem(item) {
    const itemHTML = 
    `
    <div class="col">
    <div>
        <div>
            <p class="fw-bold fs-3 m-0">${item.name}</p>
            <span class="fw-bold fs-6 d-block text-uppercase" style="translate: 30px -5px">${item.by}</span>
        </div>
        <a href="${item.url}">
            <img class="w-50" src="${item.img}" >
        </a>
    </div>
    <button class="btn btn-outline-secondary"> ✧ ¿Deseas ver mas detalles? ✦ </button>
    </div>
    `


    const itemsContainer = document.getElementById("hoodieProducto");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    name: "MANGA",
    img: "/assets/img/MANGA.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Hoodie, con diseño anime/manga"
});

addItem({
    name: "COMICS",
    img: "/assets/img/COMICS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Hoodie, con diseño comic/superhéroe"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/TV SHOW.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Playera, con diseño cartoon/avatar"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/APPA.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Hoodie, con diseño TV SERIE/Saul G."
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/AVATAR.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Playera, con diseño cartoon/avatar"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/FAMOUS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Hoodie, con diseño Película/4th Dimention"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/BRUNO.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Playera, con Treasure... digo Bruno Mars"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/BTS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Playera, con IDOLS... lol"
});

addItem({
    name: "RETRO",
    img: "/assets/img/RETRO.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by: "Playera, con frase letras retro"
});

addItem({
    name: "FRASES",
    img: "/assets/img/FRASE.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    price:'$300 mxn',
    by:"Playera, con frase graciosa/cool"
});






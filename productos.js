"strict mode"

function addItem(item) {
    const itemHTML = `
    <div class="col">
        <div>
            <p class="fw-bold fs-3 m-0">${item.name}</p>
            <span class="fw-bold fs-6 d-block text-uppercase" style="translate: 30px -5px">${item.by}</span>
        </div>
        <a href="${item.url}">
            <img class="w-50" src="${item.img}" >
        </a>
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
    by: "By Alvaro"
});

addItem({
    name: "COMICS",
    img: "/assets/img/COMICS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Luis"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/TV SHOW.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Alan"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/APPA.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Anafer"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/AVATAR.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Azucena"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/FAMOUS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Caro"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/BRUNO.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Toño"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/BTS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Pepe"
});

addItem({
    name: "RETRO",
    img: "/assets/img/RETRO.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Martin"
});

addItem({
    name: "FRASES",
    img: "/assets/img/FRASE.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "By Sofia"
});






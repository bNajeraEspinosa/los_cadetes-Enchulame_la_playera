function addItem(item) {
    const itemHTML = `
    <div class="col">
        <div class="d-flex flex-column">
            <p class="fw-bold fs-3 m-0">${item.name}</p>
            <span class="fw-bold fs-6text-uppercase">${item.by}</span>
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
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Alvaro"
});

addItem({
    name: "COMICS",
    img: "/assets/img/COMICS.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Luis"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/TV SHOW.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Alan"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/APPA.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Anafer"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/AVATAR.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Azucena"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/FAMOUS.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Caro"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/BRUNO.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Toño"
});

addItem({
    name: "FAMOUS",
    img: "/assets/img/BTS.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Pepe"
});

addItem({
    name: "RETRO",
    img: "/assets/img/RETRO.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Martin"
});

addItem({
    name: "FRASES",
    img: "/assets/img/FRASE.png",
    description: "Orange and Apple juice fresh and delicious",
    url: "#",
    by: "By Sofia"
});

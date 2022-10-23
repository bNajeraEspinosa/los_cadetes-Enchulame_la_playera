<<<<<<< HEAD
function addItem(item){
    const itemHTML = '<div class="col">\n'+
    `<p>${item.name}</p>\n`+
    `<img src="${item.img}">\n`+
  '</div>\n';
=======
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

>>>>>>> e17d0b44ebe4c01aac0da197aa34b328099c67c8
    const itemsContainer = document.getElementById("hoodieProducto");
    itemsContainer.innerHTML += itemHTML;
}

<<<<<<< HEAD
addItem({'name':'playera1',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

addItem({'name':'playera2',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera3',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera4',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera5',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera6',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera7',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera8',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera9',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'playera10',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description':'Orange and Apple juice fresh and delicious'});
=======
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
>>>>>>> e17d0b44ebe4c01aac0da197aa34b328099c67c8

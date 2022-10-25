"strict mode"

function addItem(item) {
    const itemHTML = 
`<div class="card-outline" style="width: 18rem;">
  <img src="${item.img}" class="card-img-top" alt="ropa/hoodie/playera/con diseño">
  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.by}</p>
    <p class="card-text">${item.price}</p>
    <a href="#" class="btn btn-outline-secondary">Deseas ver mas detalles? <3</a>
    <!--<a href="${item.url}">-->
  </div>
</div> `



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
    by: "playera, con IDOLS... lol"
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


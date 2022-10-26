function addItem(item) {
    const itemHTML = 
    `
    <div class="col">
    <div>
        <div>
            <p class="fw-bold fs-3 m-0 my-1">${item.name}</p>
        </div>
        <a href="${item.url}">
            <img class="w-50 my-3 img-fluid" src="${item.img}" >
        </a>
    </div>
    </div>
    <br><br><br><br>
    <br><br><br><br>
    `


    const itemsContainer = document.getElementById("hoodieProducto");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    name: "MANGA",
    img: "/assets/img/MANGA.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "Hoodie, con diseño anime/manga"
});

addItem({
    name: "COMICS",
    img: "/assets/img/COMICS.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "Hoodie, con diseño comic/superhéroe"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/TV SHOW.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "Playera, con diseño cartoon/avatar"
});

addItem({
    name: "TV SHOW",
    img: "/assets/img/APPA.png",
    description: "fresh,cool,tshirt/hoodie",
    url: "#",
    by: "Hoodie, con diseño TV SERIE/Saul G."
});






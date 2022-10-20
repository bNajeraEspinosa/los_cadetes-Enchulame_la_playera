function addItem(item) {
    const itemHTML = '<div class="col">\n' +
        `<p>${item.name}</p>\n` +
        `<img src="${item.img}">\n` +
        '</div>\n';
    const itemsContainer = document.getElementById("hoodieProducto");
    itemsContainer.innerHTML += itemHTML;
}

addItem({
    'name': 'playera1',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera2',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera3',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera4',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera5',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera6',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera7',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera8',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera9',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

addItem({
    'name': 'playera10',
    'img': '/los_cadetes-Enchulame_la_playera/assets/img/anime.png',
    'description': 'Orange and Apple juice fresh and delicious'
});

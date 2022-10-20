function addItem(item){
    const itemHTML = '<div class="col">\n'+
    `<p>${item.name}</p>\n`+
    `<img src="${item.img}" style="width: 40%;">\n`+
  '</div>\n';
    const itemsContainer = document.getElementById("hoodieProducto");
    itemsContainer.innerHTML += itemHTML;
}


addItem({'name':'MANGA',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/MANGA.png',
    'description':'Orange and Apple juice fresh and delicious'});

addItem({'name':'COMICS',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/COMICS.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'TV SHOW',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/TV SHOW.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'TV SHOW',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/APPA.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'TV SHOW',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/AVATAR.png',
    'description':'Orange and Apple juice fresh and delicious'});


    addItem({'name':'FAMOUS',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/FAMOUS.png',
    'description':'Orange and Apple juice fresh and delicious'});


    addItem({'name':'FAMOUS',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/BRUNO.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'FAMOUS',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/BTS.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'RETRO',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/RETRO.png',
    'description':'Orange and Apple juice fresh and delicious'});

    addItem({'name':'FRASES',
    'img':'/los_cadetes-Enchulame_la_playera/assets/img/FRASE.png',
    'description':'Orange and Apple juice fresh and delicious'});




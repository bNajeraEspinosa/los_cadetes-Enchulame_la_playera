const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

//total de items
let current_page = 1;
let rows = 5;

function DisplayList (items, wrapper, rows_per_page, page) {


	wrapper.innerHTML = "";
	//aqui declaramo que la pag tendra un decendente 
	page--;

	//Inicio de los items en 0 y se contara por pagina 

	//(row =5) * (page = 0)= 0  aqui vemos en que index se inicia
	let start = rows_per_page * page;
	//(page = 0) + (row_per_page = 5) y cuantos items se enseñan
	let end = start + rows_per_page;

	let paginatedItems = items.slice(start, end);

	/* console.log(paginatedItems); */

	//aqui va a deplegar los 5 items
	for (let i = 0; i < paginatedItems.length; i++) {
		let item = paginatedItems[i];


		//crea lo obtenido al HTML 
		let item_element = document.createElement('div');
		// agrega la clase al HTML 
		item_element.classList.add('item');
		// pone el texto HTML 
		item_element.innerText = item.name;

		
		wrapper.appendChild(item_element);
	}
}


function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	//Math.ceil redonde hacia arriba cualquier numero
	//aqui sacamos los botones dividiendo items/rows
	let page_count = Math.ceil(items.length / rows_per_page);
console.log(page_count);
console.log(items);

	//page_conunt(22/5)=4.4 y redonde a 5
	//esto es lo que hace dinámica los botones de la paginación
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('a');
	let li = document.createElement('li');

	li.classList.add('page-item');
	button.classList.add('page-link');

	li.appendChild(button);

	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	

	return button;
}

/* const productos = fetch ('https://mockend.com/alaanescobedo/db-server/products')
.then(response => response.json())
.then(data => console.log(data)); */


//en el link del server ?<---- es un queryparameters y en este caso delimitara lo que nos llegue (a 12)
 const productos = async() =>{
try {
	const respuesta = await fetch ('https://mockend.com/alaanescobedo/db-server/products?limit=12')
	const data = await respuesta.json() 
	console.log(data)

	DisplayList(data,list_element,rows,current_page);
	SetupPagination(data,pagination_element,rows);
} catch (error) {
	
}

 }

productos();

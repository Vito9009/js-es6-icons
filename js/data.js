/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
in cui è presente il nome dell’icona e l’icona stessa.

Milestone 2
Ciascuna icona ha una proprietà “color”: utilizzare questa proprietà per visualizzare 
le icone del colore corrispondente.

Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone 
(animal, vegetable, user). Quando l’utente seleziona un tipo dalla select, 
visualizzare solamente le icone corrispondenti.

BONUS
1- modificare la struttura dati fornita e valorizzare la proprietà “color” in modo dinamico: 
generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal 
simbolo “#” seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
2- popolare le options della select della milestone 3 dinamicamente.
*/

const allElement = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

let container = document.querySelector(".container");
let select = document.getElementById("select-type");

for (let i = 0; i < allElement.length; i++) {
	container.innerHTML += boxIcon(allElement[i]);
}

//FILTER

let animal = allElement.filter((element) => {
	return element.type == "animal";
});


let vegetable = allElement.filter((element) => {
	return element.type == "vegetable";
});


let user = allElement.filter((element) => {
	return element.type == "user";
});


select.addEventListener('change', function() {
	if (select.value == "all") {
		container.innerHTML = "";
		allElement.forEach((element) => {
			container.innerHTML += boxIcon(element);
		});
	}else if (select.value == "animal") {
		container.innerHTML = "";
		animal.forEach((element) => {
			container.innerHTML += boxIcon(element);
		});
	}else if (select.value == "vegetable") {
		container.innerHTML = "";
		vegetable.forEach((element) => {
			container.innerHTML += boxIcon(element);
		});
	}else if (select.value == "user") {
		container.innerHTML = "";
		user.forEach((element) => {
			container.innerHTML += boxIcon(element);
		});
}
}
);


function boxIcon(card){
	let cardbox = `
		<div class="box">
			<i class="${card.family} ${card.prefix}${card.name} icon" style="color:${card.color}"></i>
			<h5 class="text-icon">${card.name}</h4>
		</div>

		`;
	
		return cardbox;
}
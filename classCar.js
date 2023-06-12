class Car {
    constructor(marka, model, number, color, year, price) {
// Поля класса не обязаны называться так же, как
// аргументы конструктора. Не обязаны повторять их.
// Не обязаны быть в том же количестве.
// Вы можете создавать их по необходимости от задачи
        this.marka = marka;
        this.model = model;
        this.number = number;
        this.color = color;
        this.year = year;
        this.price = price;
		this.createion_time = new Date();
		// Поля, созданные в контструкторе,
		// будут доступны в других методах
		// 
    }
	
	create_table_row() {
		console.log(this.color);
		let result = document.createElement('tr');
		let td = document.createElement('td');
		let txt = document.createTextNode(this.marka);
		td.appendChild(txt);
		result.appendChild(td);
		
		// Создаем новую ячейку
		td = document.createElement('td');
        txt = document.createTextNode(this.model);
		td.appendChild(txt);
		result.appendChild(td);
		
		td = document.createElement('td');
		txt = document.createTextNode(this.number);
		td.appendChild(txt);
		result.appendChild(td);
		
		td = document.createElement('td');
		txt = document.createTextNode(this.color);
		td.appendChild(txt);
		result.appendChild(td);
		
		td = document.createElement('td');
		txt = document.createTextNode(this.year);
		td.appendChild(txt);
		result.appendChild(td);

		td = document.createElement('td');
		txt = document.createTextNode(this.price);
		td.appendChild(txt);
		result.appendChild(td);
		
	    return result;
	}
}

var cars = [
// Создание массива объектов
    new Car(
		'Mercedes',
		'CC63 AMG',
		'white',
		'F555KO111',
		2015,
		12599000),
	new Car('BMW', 'i8', 'blue', "D6767PA77", 2015, 12500000),
	new Car('Lambargini', 'huracan', 'white', 'H907BE123', 2014, 25000000)

];

// console.log(car1);

function build_page() {
	//создам таблицу чтобы при нажатии на кнопку не появлялась постоянно шапка
	//уже в нее буду вкладывать через кнопку данные
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tbody = document.createElement('tbody');
	tbody.id='tbody';
	table.appendChild(thead);
	table.appendChild(tbody);
		
	document.querySelector('body').appendChild(table);
	let row_1 = document.createElement('tr');
	let heading_1 = document.createElement('th');
	heading_1.innerHTML = 'Marka';
	let heading_2 = document.createElement('th');
	heading_2.innerHTML = "Model";
	let heading_3 = document.createElement('th');
	heading_3.innerHTML = "Number";
	let heading_4 = document.createElement('th');
	heading_4.innerHTML = "Color";
	let heading_5 = document.createElement('th');
	heading_5.innerHTML = "Year";
	let heading_6 = document.createElement('th');
	heading_6.innerHTML = "Price";

	row_1.appendChild(heading_1);
	row_1.appendChild(heading_2);
	row_1.appendChild(heading_3);
	row_1.appendChild(heading_4);
	row_1.appendChild(heading_5);

	row_1.appendChild(heading_6);

	thead.appendChild(row_1);
	//console.log(table);
	cars[0].create_table_row();
}

function save() {  
	let tbody = document.getElementById('tbody');
	for (let i = 0; i < cars.length; i++) {
		tbody.appendChild(cars[i].create_table_row());
	}

//сумма трех авто
    let row_5 = document.createElement('tr');
    let row_5_car1 = document.createElement('td');
    row_5_car1.innerHTML += 'Итого';
    let row_5_car6 = document.createElement('td');
	
	let sum_res = 0;
	for (let i = 0; i < cars.length; i++) {
		sum_res += cars[i].price;
	}

	row_5_car6.innerHTML = sum_res; // cars[0].price + cars[1].price + cars[2].price;


    tbody.appendChild(row_5)
    row_5.appendChild(row_5_car1)
    row_5.appendChild(row_5_car6)

}

// document.body.appendChild(table);
// car1.appendChild(body);



<<<<<<< HEAD
=======
// этот скрипт выполняется на страницах магазинов
// он добавляет кнопку, которая по щелчку передает некоторые данные в popup.js

>>>>>>> refs/remotes/origin/test
(function() {

	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {
			return element.attachEvent('on'+evnt, funct);
		}
		else {
			return element.addEventListener(evnt, funct, false);
		}
	}
<<<<<<< HEAD
	
	var getContent=function() {
		var element=document.getElementsByTagName('aside');
		chrome.storage.local.set({'tp_val':element[0]}, function() {
			console.log('save');
		});
	}

	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent);
	document.body.appendChild(addButton); 
=======
	//пока не нажали кнопку - allEl Пустой
	var allElements = [];
	chrome.storage.local.get('allEls', function (data) {
			var temp = data['allEls'];
			console.log(temp);
			if (temp === undefined || temp === null) {
				temp = [];
			}
			console.log(allElements);
			allElements = allElements.concat(temp);
			console.log(allElements);
		chrome.storage.local.set({'allEls': allElements});
	});
	
	var getContent=function() { //функция выполняется при нажатии кнопки		
		var name = document.getElementsByClassName('product_header')[0].children[1].innerText; // узнали имя телефона + id (вырезать Id) 		
  		var price = document.getElementsByClassName('standart_price')[0].children[0].innerText; // узнали стандартную цен
		var characteristics = document.getElementsByClassName('product_features')[0].children[0].innerText; // характеристики
		var id =name.split(' ')[0];
		name = name.replace(id, "");


		var store = window.location.href.split('.')[1];

		var element = [id, name, price, characteristics,store];

		alert('вы добавили к сравнению: '+ name);

		// в многомерный массив allElements добавляются даные из storage
		chrome.storage.local.get('allEls', function (data) {
			var temp = data['allEls'];
			console.log(temp);
			console.log(allElements);
			allElements = allElements.concat(temp);
			console.log(allElements);
			allElements.push(element);
		chrome.storage.local.set({'allEls': allElements});
		allElements=[];

		});
		//console.log(allElements);

		// добавляем в многомерный массив полученные со мтраницы данные и отправляем в storage 
		
	}


	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent); //по нажанию на кнопку выполняется функция getContent
	document.body.appendChild(addButton); 

>>>>>>> refs/remotes/origin/test
})();
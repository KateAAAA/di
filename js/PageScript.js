// этот скрипт выполняется на страницах магазинов
// он добавляет кнопку, которая по щелчку передает некоторые данные в popup.js

(function() {

	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {
			return element.attachEvent('on'+evnt, funct);
		}
		else {
			return element.addEventListener(evnt, funct, false);
		}
	}
	//пока не нажали кнопку - allEl Пустой
	var allElements = [];
	chrome.storage.local.get('allEls', function (data) {
			var temp = data['allEls'];
			allElements = allElements.concat(temp);
	});
	
	var getContent=function() { //функция выполняется при нажатии кнопки		
		var name = document.getElementsByClassName('product_header')[0].children[1].innerText; // узнали имя телефона + id (вырезать Id) 		
  		var price = document.getElementsByClassName('standart_price')[0].children[0].innerText; // узнали стандартную цен
		var characteristics = document.getElementsByClassName('product_features')[0].children[0].innerText; // характеристики
		var id =name.split(' ')[0];
		var store = window.location.href.split('.')[1]
		var element = [id, name, price, characteristics,store];


		alert('вы добавили к сравнению: '+name);

		// в многомерный массив allElements добавляются даные из storage
		chrome.storage.local.get('allEls', function (data) {
			var temp = data['allEls'];
			allElements = allElements.concat(temp);
		});

		// добавляем в многомерный массив полученные со мтраницы данные и отправляем в storage 
		allElements.push(element);
		chrome.storage.local.set({'allEls': allElements});
	}


	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent); //по нажанию на кнопку выполняется функция getContent
	document.body.appendChild(addButton); 

})();
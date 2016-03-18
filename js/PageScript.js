// этот скрипт выполняется на страницах магазинов
// он добавляет кнопку, которая по щелчку передает некоторые данные в popup.js

(function() {
	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {
			return element.attachEvent('on'+ evnt, funct);
		}
		else {
			return element.addEventListener(evnt, funct, false);
		}
	}
	
	var storage = chrome.storage.local;
	var keyInStorage = 'AllElls';
	
	storage.get('AllElls', function (data) {			
		if (!Array.isArray(data['AllElls'])) {			
			storage.set({'AllElls':[]});
		}
	});

	function addInList(element) {
		storage.get('AllElls', function (data) {	
			
			//data['AllElls'].indexOf(element);  // - проверка на дубли	 - всегда возращает -1		

			data['AllElls'].push(element);			
			storage.set({'AllElls': data['AllElls']}, function() {
				alert('вы добавили к сравнению: '+ element[1]);
				console.log(data['AllElls']);
			});
		});	
	}
	
	function getFromCitilink() {
		var name = document.getElementsByClassName('product_header')[0].children[1].innerText; // узнали имя телефона + id (вырезать Id) 		
  		var price = document.getElementsByClassName('standart_price')[0].children[0].innerText; // узнали стандартную цен
		var characteristics = document.getElementsByClassName('product_features')[0].children[0].innerText; // характеристики
		var id =name.split(' ')[0];
		name = name.replace(id, "");
		var store = 'Ситилинк';

		var element = [id, name, price, characteristics,store];
		addInList(element);
	}

	function getFromDns(){
		var name = document.getElementsByClassName('page-title price-item-title')[0].innerText;
		var id = document.getElementsByClassName('price-item-code')[0].innerText;
		id = id.replace("Код товара: ", "");
		var price = document.getElementsByClassName('price_g')[0].innerText;
		var characteristics = document.getElementsByClassName('table-params table-no-bordered')[0].innerText;
		var store = 'ДНС';
		
		var element = [id, name, price, characteristics,store];

		addInList(element);
	}

	var getContent=function() { //функция выполняется при нажатии кнопки

		var storeName = window.location.href.split('.')[1];// add case 
		//console.log(storeName);	
		
		switch(storeName) {
			case 'citilink': getFromCitilink();break;
			case 'dns-shop': getFromDns();break;			
			default: console.log('error');
		}
	}


	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent); //по нажанию на кнопку выполняется функция getContent
	document.body.appendChild(addButton); 

})();
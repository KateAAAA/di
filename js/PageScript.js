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
			var p=0;
			for(var i=0; i<data['AllElls'].length;i++) {
				var x1 = data['AllElls'][i][0];
				var x2 = element[0];
				if(x1==x2) p++;
			}
			if(p==0) {
				data['AllElls'].push(element);
				storage.set({'AllElls': data['AllElls']}, function() {
					alert('вы добавили к сравнению: '+ element[1]);
				});	
			}
			else {
				alert('товар уже добавлен к сравнению: '+ element[1]);
			}
		});	
	}

	
	function getFromCitilink() {
		var url=location.pathname;
		var name = document.getElementsByClassName('product_header')[0].children[1].innerText; // узнали имя телефона + id (вырезать Id) 		
  		var type= name.split(' ')[1];
  		var price = document.getElementsByClassName('standart_price')[0].children[0].innerText; // узнали стандартную цен
		var characteristics = document.getElementsByClassName('product_features')[0].children[0].innerText; // характеристики
		var id =name.split(' ')[0];
		name = name.replace(id, "");
		var store = 'Ситилинк';
		var element = [url, name, store, price, type, characteristics];	
		addInList(element);
	}

	function getFromDns(){
		var url=location.pathname;
		var name = document.getElementsByClassName('page-title price-item-title')[0].innerText;
		var type =  "тип";
		var price = document.getElementsByClassName('price_g')[0].innerText;
		var characteristics = document.getElementsByClassName('table-params table-no-bordered')[0].innerText;
		var store = 'ДНС';		
		var element = [url, name, store, price, type, characteristics];		
		addInList(element);
	}

	var getContent=function() { //функция выполняется при нажатии кнопки
		var storeName = window.location.href.split('.')[1];	
		switch(storeName) {
			case 'citilink': getFromCitilink();break;
			case 'dns-shop': getFromDns();break;			
			default: console.log('error');
		}
	}

	var mouseoverButton = function() { 
		addButton.className='addButtonSupDiHover';
	}
	var mouseoutButton = function() {
		addButton.className='addButtonSupDi';
	}

	var addButton = document.createElement('button');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent); //по нажанию на кнопку выполняется функция getContent
	addEvent(addButton,'mouseover',mouseoverButton);
	addEvent(addButton,'mouseout',mouseoutButton);
	document.body.appendChild(addButton); 

})();
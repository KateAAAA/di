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
	
	var getContent=function() {
		//название телефона + какие то цифры
		
		var articles = document.getElementsByClassName('product_header');  		
  		//console.log(articles[0].children[1].innerText); 
  		var name = articles[0].children[1].innerText;
  		
  		//цена
  		var articles = document.getElementsByClassName('standart_price');
  		//console.log(articles[0].children[0].innerText);
  		var price = articles[0].children[0].innerText; 

		//другие характеристики  
		var articles = document.getElementsByClassName('product_features');
		//console.log(articles);s
		//console.log(articles[0].children[0].innerText);
		var characteristics = articles[0].children[0].innerText;
		//console.log(characteristics); 


		//console.log(temp);
			

  		//var t = document.getElementsByTagName("h1");
  		//console.log(t.nodeValue);

  		//var nextle = document.getElementsByTagName('h1');
  		//console.log(nextle);
  		//console.log(nextle.innerText);
  	
		//var element=document.getElementsByTagName('aside');
		var element = [name, price, characteristics];

		chrome.storage.local.get('tp_val', function (data) {		
		console.log("sadsad",data['tp_val']);
		var x = data['tp_val'] || [];

		//if data data['tp_val'] is array then push  x.push(element[0]);
		//else var arr=[data[],element]0]
		console.log(x);
		x.push(element[0]);
		console.log(x);
		chrome.storage.local.set({'tp_val':x}, function() {

		});
		});

		
		chrome.storage.local.set({'p_val':element[1]}, function() {
			console.log('save');
		});
		chrome.storage.local.set({'c_val':element[2]}, function() {
			console.log('save');
		});
		//chrome.storage.local.set({'tp_valtest':element}, function() {
		//	console.log('save');
		//});

	}

	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent); //по нажанию на кнопку выполняется функция getContent
	document.body.appendChild(addButton); 
})();
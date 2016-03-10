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
	
	var getContent=function() { //функция выполняется при нажатии кнопки		
		var name = document.getElementsByClassName('product_header')[0].children[1].innerText; // узнали имя телефона + id (вырезать Id) 		
  		var price = document.getElementsByClassName('standart_price')[0].children[0].innerText; // узнали стандартную цен
		var characteristics = document.getElementsByClassName('product_features')[0].children[0].innerText; // характеристики
		var element = [name, price, characteristics];

		// в многомерный массив allElements добавляются даные из storage
		chrome.storage.local.get('allEls', function (data) {
			var temp = data['allEls'];
			console.log(temp);
			allElements = allElements.concat(temp);
		});


		//получили sto добавили и снова отпрваили новое 
		//chrome.storage.local.get('allEls', function (data) {
			//var temp = data['allEls'];
			//console.log(temp);
			//allElements.push(temp); 
		//});

		
		//console.log(allElements);
		// добавляем в многомерный массив полученные со мтраницы данные и отправляем в storage 
		allElements.push(element);
		chrome.storage.local.set({'allEls': allElements});

		console.log(allElements);


		
		/*chrome.storage.local.set({'mArr': maxArr}, function()// отправляем многомерный массив
		{

		}); 
			//var self=this;
			chrome.storage.local.get('arr', function (data) { // получаем
				
				var p = data['arr']; //Всегда объявляйте через var
				//self.localInFunction = p;  // или попробуйуте без self
				totalGlobalVar = p; //также пробуйте варианты с this
				//console.log(p); // массив который приходит с popup
			});	
			//console.log(self.localInFunction);
			console.log(totalGlobalVar);
			*/


		

		//chrome.storage.local.get('tp_val', function (data) {		
		//console.log("sadsad",data['tp_val']);
		///var x = data['tp_val'] || [];

		//if data data['tp_val'] is array then push  x.push(element[0]);
		//else var arr=[data[],element]0]
		//console.log(x);
		//x.push(element[0]);
		//console.log(x);
		//chrome.storage.local.set({'tp_val':x}, function() {

		//});
		//});

		

	}



	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent); //по нажанию на кнопку выполняется функция getContent
	document.body.appendChild(addButton); 
})();
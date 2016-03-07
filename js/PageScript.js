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
	
	var totalGlobalVar;
	
	var getContent=function() {		
		var name = document.getElementsByClassName('product_header')[0].children[1].innerText; // узнали имя телефона + id (вырезать Id) 		
  		var price = document.getElementsByClassName('standart_price')[0].children[0].innerText; // узнали стандартную цен
		var characteristics = document.getElementsByClassName('product_features')[0].children[0].innerText; // характеристики
		var element = [name, price, characteristics]; 
		var maxArr = []; //массив массивов 
		
		maxArr.push(element);
		
		var localInFunction;
		
		chrome.storage.local.set({'mArr': maxArr}, function()// отправляем многомерный массив
		{
			var self=this;
			chrome.storage.local.get('arr', function (data) { // получаем
				
				var p = data['arr']; //Всегда объявляйте через var
				self.localInFunction = p;  // или попробуйуте без self
				totalGlobalVar = p; //также пробуйте варианты с this
				console.log(p); // массив который приходит с popup
			});	
		}); 
		

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

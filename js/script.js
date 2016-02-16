(function (){	// обернем все в безымянную функцию, чтобы не создавать глобальных переменных - просто хороший тон
	//alert("222");
	var temp = document.createElement('button');
		temp.id = 'addButtonSupDi';	// добавим css класс 'downloadLink' для нашей ссылки
		temp.type = 'button';
		temp.innerHTML = '+';
		document.body.appendChild(temp); //добавляем элемент в тело документа

	document.getElementById('addButtonSupDi').onclick = function() {
    	alert("добавляем товар")
	}
	


})();
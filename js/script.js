(function (){	// обернем все в безымянную функцию, чтобы не создавать глобальных переменных - просто хороший тон
	//alert("222");
	var temp = document.createElement('div');
		temp.className = 'addButtonSupDi';	// добавим css класс 'downloadLink' для нашей ссылки
		temp.textContent = "+";
			document.body.appendChild(temp); //добавляем элемент в тело документа
			//Вот здесь вот, например.
})();

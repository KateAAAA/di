$(function() {
	var arr;
	chrome.storage.local.get('mArr', function (data) { //получили многомерный массив 	
		var p = data['mArr'];
		console.log(p);
		//arr = p;
		//$('body').append(p[0]);
		chrome.storage.local.set({'arr':p}, function (data) {	 // отправили многомерный массив обратно	
		//console.log(data['tp_val']);
		//var p = data['arr'];
		//console.log('getpopup');
		//$('body').append(p[0]);

	});
	});
	

	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {
			return element.attachEvent('on'+evnt, funct);
		}
		else {
			return element.addEventListener(evnt, funct, false);
		}
	}

	var clearContent = function ()
	{
		$('body').empty();
		//var n=[];
		//chrome.storage.local.set({'arr': n}, function (data) {		
		//console.log(data['tp_val']);
		//var p = data['arr'];
		//console.log('getpopup');
		//$('body').append(p[0]);

	//});

	}

	var clearButton = document.createElement('button');
	clearButton.innerHTML='clear';
	clearButton.className='clear';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.appendChild(clearButton); 

	
	
});
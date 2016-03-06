$(function() {
	//console.log('load PS');
	
	chrome.storage.local.get('tp_val', function (data) {		
		//console.log(data['tp_val']);
		var x = data['tp_val'];
		//console.log(x);
		$('body').append("<br>");
		$('body').append(x);
		$('body').append("<br>");		
	});

	chrome.storage.local.get('p_val', function (data) {		
		//console.log(data['tp_val']);
		var y = data['p_val'];
		console.log(y);
		$('body').append(y);	
		$('body').append("<br>");	
	});

	chrome.storage.local.get('c_val', function (data) {		
		//console.log(data['tp_val']);
		var z = data['c_val'];
		console.log(z);
		//$('body').append(z);

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
	}

	var clearButton = document.createElement('button');
	clearButton.innerHTML='clear';
	clearButton.className='clear';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.appendChild(clearButton); 

	
	
});
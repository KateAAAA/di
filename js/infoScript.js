$(function() {
	var storage = chrome.storage.local;
	var addEvent = function(element, evnt, funct){
		if (element.attachEvent) {
			return element.attachEvent('on'+evnt, funct);
		}
		else {
			return element.addEventListener(evnt, funct, false);
		}
	}

	var clearContent = function () {
		$('.content').empty();
		storage.set({'AllElls': []});		
	}

	var clearButton = document.createElement('button');
	clearButton.innerHTML='Clear list';
	clearButton.className='clear';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.childNodes[1].appendChild(clearButton);	
	console.log(document.body.childNodes[1]);
});

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
		storage.clear();
		location.reload();		
	}

	var clearOne = function () {
		console.log("it work");	
	}

	var clearButton = document.createElement('button');
	clearButton.innerHTML='Clear list';
	clearButton.className='func';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.childNodes[1].appendChild(clearButton);


	var clearOne = document.createElement('button');
	clearOne.innerHTML='delOne';
	clearOne.className='delOne"';
	addEvent(clearOne,'click',clearOne);  
	document.body.childNodes[1].appendChild(clearOne);
		
});
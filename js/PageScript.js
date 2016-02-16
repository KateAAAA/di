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
		var element=document.getElementsByTagName('aside');
		chrome.storage.local.set({'tp_val':element[0]}, function() {
			console.log('save');
		});
	}

	var addButton = document.createElement('div');
	addButton.innerHTML='+';
	addButton.className='addButtonSupDi';
	addEvent(addButton,'click',getContent);
	document.body.appendChild(addButton); 
})();
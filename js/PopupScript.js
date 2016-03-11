$(function() {
	chrome.storage.local.get('allEls', function (data) {
			var temp = data['allEls'];
			for (i = 0; i < temp.length; i++) {
			  $('.content').append(temp[i][1]);
			  $('.content').append(" - ");
			  $('.content').append(temp[i][4]);
			  $('.content').append('<br>');
			}
		});
	

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
		var emptyElements = [];
		chrome.storage.local.set({'allEls': emptyElements});
		
	}
	
	var clearButton = document.createElement('button');
	clearButton.innerHTML='clear';
	clearButton.className='clear';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.appendChild(clearButton);	
});
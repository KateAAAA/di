$(function() {
	
	var storage = chrome.storage.local;
	storage.get('AllElls', function (data) {
			var temp = data['AllElls'];
			for (i = 0; i < temp.length; i++) {
			  $('.contentInfo').append(temp[i][1]);
			  $('.contentInfo').append(" - ");
			  $('.contentInfo').append(temp[i][2]);
			  $('.contentInfo').append(" - ");
			  $('.contentInfo').append(temp[i][3]);
			  $('.contentInfo').append(" - ");
			  $('.contentInfo').append(temp[i][4]+'<br><br><br><br><br><br>');
			}
			console.log(temp[0][3]);
			console.log(temp[0][3].indexOf());
			// элемент-список UL
			var list = document.getElementById('list');
			// новый элемент
			var li = document.createElement('LI');
			li.innerHTML = '2';
			// добавление в конец
			list.appendChild(li);
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
		storage.set({'AllElls': []});		
	}
	
	var clearButton = document.createElement('button');
	clearButton.innerHTML='clear';
	clearButton.className='clear';
	addEvent(clearButton,'click',clearContent);  //см addlisten jquery
	document.body.appendChild(clearButton);	
});
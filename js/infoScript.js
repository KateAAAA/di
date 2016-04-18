$(function() {
	
	var storage = chrome.storage.local;

	storage.get('AllElls', function (data) {
			var elements = data['AllElls']; // получили всю информацию

			var newElem=document.createElement("table"); //создали табличку

			for (var j = 0; j < 5; j++) { // j=1 не робит
				var newRow=newElem.insertRow(j);
				console.log(newRow);
				for (var i = 0; i < elements.length; i++) {
					var newCell = newRow.insertCell(i);
					newCell.width="200";
					if(j!=4) newCell.innerHTML=elements[i][j];
					else {
						var ch = elements[i][j].split('\n');
						console.log(ch);						
					}					
				}
			}
			document.body.appendChild(newElem);
			
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
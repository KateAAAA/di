$(function() {
	console.log('load BS');
	chrome.storage.local.get('tp_val', function (data) {		
		console.log(data['tp_val']);
	});
	
	
});
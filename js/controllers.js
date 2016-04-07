	var element = angular.module('phonecatApp', []);
			element.controller('PhoneListCtrl', function ($scope)
				{
				$scope.phones=[];
				$scope.phonescount=$scope.phones.length;
				var storage = chrome.storage.local;

				storage.get('AllElls', function (data) {	
					$scope.$apply(function(){
					 $scope.phones = data['AllElls']; 
					 $scope.phonescount=$scope.phones.length;
					 console.log('ph',$scope.phones);
					 });
					 /*[
					    {'name': 'Nexus S',
					     'snippet': 'Fast just got faster with Nexus S.',
					     'price': '123' },
					    {'name': 'Motorola XOOM™ with Wi-Fi',
					     'snippet': 'The Next, Next Generation tablet.',
					 	'price': '222' },
					    {'name': 'MOTOROLA XOOM™',
					     'snippet': 'The Next, Next Generation tablet.',
					 	 'price': '333' }
					  ];*/
				  });
				});

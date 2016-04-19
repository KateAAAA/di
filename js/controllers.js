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
					 });
				  });
				});
		var storage = chrome.storage.local;

                                storage.get('AllElls', function (data) {

					 $scope.phones = data;
					 $scope.orderProp = "data['AllElls'][2]";
				});


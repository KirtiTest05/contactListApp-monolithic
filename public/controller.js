var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.allContacts = [];
    $http.get('http://172.17.0.3:3001/api/contacts').then(function(res){
    	console.log('res: ', res);
    	$scope.allContacts = res.data;

    });
});
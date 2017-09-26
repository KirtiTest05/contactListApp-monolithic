var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
	$scope.allContacts = [];
	getContacts();
    $scope.saveContact = function() {
    	var newContact = {
    		first_name: $scope.firstName,
    		last_name: $scope.lastName,
    		contact_number: $scope.contactNumber
    	}
    	$http.post('/api/contacts', newContact).then(function(res){
	    	getContacts();
	    	$scope.firstName = null;
	    	$scope.lastName = null;
	    	$scope.contactNumber = null;
    	});
    }

    function getContacts () {
	    $http.get('/api/contacts').then(function(res){
	    	$scope.allContacts = res.data;
	    });
    }
});
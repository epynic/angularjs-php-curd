(function(){
	var app = angular.module('crudApp', ['ngRoute'] );

	app.config(function($routeProvider) {
		$routeProvider
			.when('/',{
				controller  : 'CustomersController',
				templateUrl : 'app/views/listCustomer.html'
			})
			.when('/edit-customer/:customerID' ,{
				controller  : 'CustomerEditController',
				templateUrl : 'app/views/editCustomer.html'
			})
			.otherwise( { redirectTo : '/'});
	});
}());
(function(){
	
	var customersFactory = function($http){

		var factory = {};

		factory.getCustomers = function(){
			return $http.get('services/customers');
		};

		factory.getCustomer = function( customerID ){
			return $http.get('services/customer?id='+customerID);
		};

		factory.insertCustomer = function( customer ){
			return $http.post('services/insertCustomer' ,customer);
		};

		factory.updateCustomer = function( id , customer ){
			return $http.post('services/updateCustomer' ,{id:id , customer:customer });
		};

		factory.deleteCustomer = function ( id ){
			return $http.delete('services/deleteCustomer?id='+id);
		};

		return factory;
	};


	customersFactory.$inject = ['$http'];
	angular.module('crudApp').factory('customersFactory', customersFactory);

}());
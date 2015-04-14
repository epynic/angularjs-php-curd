(function(){

	var CustomersController = function($scope,customersFactory ,$location) {
		$scope.customers = [];

		function init(){
			customersFactory.getCustomers()
				.success(function( customers ){
					$scope.	customers = customers;
				})	
				.error(function( data,status,header,config){
					//error handling
					console.log('Somethings in life dont work the way we want !');
				});		
		}
		init();

		$scope.deleteCustomer = function( id ){
			$location.path('#/');
			if ( confirm('Delete Customer Info ?') == true ){
				customersFactory.deleteCustomer(id);
				toastr.info('Data Deleted !');
			}
		};

		$scope.doSort = function(propName){
			$scope.sortBy = propName;
			$scope.reverse = !$scope.reverse;
		};

	}; 

	CustomersController.$inject = ['$scope','customersFactory' ,'$location'];
	angular.module('crudApp')
			.controller('CustomersController' , CustomersController);

}());


(function(){
	var CustomerEditController = function($scope , $routeParams , $location , customersFactory){
		customerID = ( $routeParams.customerID ) ? parseInt( $routeParams.customerID ) : 0;
		$scope.title = ( customerID <= 0 ) ? 'New' : 'Edit';
		$scope.customer = [];

		customersFactory.getCustomer(customerID)
				.success(function( customer ){
					$scope.customer = customer;
				});

		$scope.saveCustomer = function(customer){
			$location.path('/');
			if(customerID <= 0){
				customersFactory.insertCustomer( customer );
			}else{
				customersFactory.updateCustomer( customerID, customer );
			}
		};


	};

	CustomerEditController.$inject = ['$scope' , '$routeParams' , '$location' , 'customersFactory'];
	angular.module('crudApp')
			.controller('CustomerEditController' , CustomerEditController);
}());
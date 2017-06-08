var stock = angular.module("stock",[]);
var stockList=["PIH","FLWS","FCCY","XLRN","AKAO"];

stock.controller('stockController', ['$scope', function($scope){

	$scope.companyList = stockList;

	$scope.getCompayStock= function(){
		alert(this);
	}
	
}]);



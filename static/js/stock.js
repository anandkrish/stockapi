var stock = angular.module("stock",[]);
var stockList=["PIH","FLWS","FCCY","XLRN","AKAO"];

stock.controller('stockController', ['$scope','$http', function($scope,$http){

	$scope.companyList = stockList;
	$scope.searchList= [];

	$scope.getCompayStock= function(){
		var baseUrl='http://finance.google.com/finance/info?client=ig&q=NASDAQ%3A';
		var com = this.company;
		
		$scope.companyList = removeElem($scope.companyList,com);
		$scope.searchList.push(com);
		

			$http({
				method: 'GET',
				url: baseUrl+$scope.searchList

			}).then(function onSuccess(response){
				var stockArry=response.data.replace("//","");			
				$scope.stockData=JSON.parse(stockArry);
				

			},function onError(response){
				alert("Error....!!!");
			});
	}

	function removeElem(elemArr,elem){
	
		elemArr.splice(elemArr.indexOf(elem),1);
		return elemArr;

	}
	f
	
}]);



angular.module('testApp',[]).controller('testAppController',function($scope){
	$scope.greet='Hello';
	$scope.user='User';
	$scope.simpleAddition = function(a,b){
		if(a&&b)
			$scope.result = a+b;
		else
			$scope.result='';
	}
}).filter('reversing', function() {
  return function(text) {
    return text.split("").reverse().join("");
  };
});
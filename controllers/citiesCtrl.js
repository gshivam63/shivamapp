angular.
  module('starter')
  .controller('citiesCtrl', function($scope,$state, $http, sharedProperties) {
  	//code for back button
  	 $scope.navigatelocation=function(){
    $state.go('eventmenu2.location');
    }
    //code for back button ends here
    $scope.setString = function(cityname) {
    $scope.city=cityname;
    sharedProperties.setString($scope.city);
    };
});
angular.
  module('starter')
  
.controller('locationCtrl',function($scope, $http, sharedProperties) {
  $scope.getString = function() {
  $scope.city = sharedProperties.getString(); 
  $http.get("http://laravel.bonsoul.com/get_locality?city="+$scope.city)
  .success(function (data) {
  $scope.names = data;
  });
  };
  $scope.set_location_selected = function(locationname) {
    $scope.location=locationname;
    sharedProperties.set_location_selected($scope.location);
    };
});
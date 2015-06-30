angular.
  module('starter')
  .controller('venues_clickedCtrl', function($scope, $http, sharedProperties) {
  $scope.index=sharedProperties.getindex();
  $scope.city = sharedProperties.getString(); 
  $scope.location= sharedProperties.get_location_selected();
  $scope.service= sharedProperties.getservice();
  $http.get("http://laravel.bonsoul.com/get_venues?city="+$scope.city+"&service="+$scope.service+"&location="+$scope.location)
  .success(function (data) {
  $scope.names = data[$scope.index];
  $scope.photos = angular.fromJson(data[0].photos);
  $scope.timings=angular.fromJson(data[0].operationalTimings);
  });
});
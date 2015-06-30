angular.
  module('starter')
  .controller('homeCtrl',function($scope, $http, sharedProperties) {
  $scope.get_location_selected = function() {
  $scope.location = sharedProperties.get_location_selected(); 
  };
  $scope.getservice = function() {
  $scope.service = sharedProperties.getservice();
  };
});
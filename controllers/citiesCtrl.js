angular.
  module('starter')
  .controller('citiesCtrl', function($scope, $http, sharedProperties) {
    $scope.setString = function(cityname) {
    $scope.city=cityname;
    sharedProperties.setString($scope.city);
    };
})
;
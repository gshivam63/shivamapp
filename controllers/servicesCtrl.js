angular.
  module('starter')
  .controller('servicesCtrl',function($scope, $http, sharedProperties) {
   $scope.setservice = function(servicename) {
    $scope.service=servicename;
    sharedProperties.setservice($scope.service);
    };
});
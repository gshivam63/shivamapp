angular.
  module('starter')
  .controller('servicesCtrl',function($scope,$state, $http, sharedProperties) {
     $scope.navigatelook=function(){
    $state.go('eventmenu2.look_and_book');
    }
   $scope.setservice = function(servicename) {
    $scope.service=servicename;
    sharedProperties.setservice($scope.service);
    };
    $scope.setparent = function(parentid) {
    $scope.parentid=parentid;
    sharedProperties.setparent($scope.parentid);
    };
});
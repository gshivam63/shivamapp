angular.module('starter')
.controller('privacyCtrl',function($scope, $http,$state, sharedProperties) {
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
});
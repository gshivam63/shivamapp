angular.module('starter')
.controller('editprofileCtrl',function($scope, $http,$state, sharedProperties) {
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
});
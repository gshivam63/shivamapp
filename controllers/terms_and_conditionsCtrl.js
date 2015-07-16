angular.module('starter')
.controller('terms_and_conditionsCtrl',function($scope, $http,$state, sharedProperties) {
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
});
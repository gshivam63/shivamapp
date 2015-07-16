angular.
  module('starter')
  .controller('surprisemeCtrl',function($scope, $http, $state, sharedProperties) {
  //code 1 for back button
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
  //code 1 ends here
});
angular.
  module('starter')
  
.controller('locationCtrl',function($scope,$state, $http,$ionicLoading, sharedProperties) {
 
  //code for back button
  $scope.navigatelook=function(){
    $state.go('eventmenu2.look_and_book');
  }
  //code back button ends here
  $scope.getString = function() {
  $scope.$on("$ionicView.enter", function(){
   $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  //code 1 for getting selected city
  $scope.city = sharedProperties.getString(); 
  $http.get("http://laravel.bonsoul.com/get_locality?city="+$scope.city)
  .success(function (data) {
  $scope.names = data;
   $scope.loading.hide();
    });
  });
  };
  //code 1 ends here
  //code 2 for setting selected locality
  $scope.set_location_selected = function(locationname) {
    $scope.location=locationname;
    sharedProperties.set_location_selected($scope.location);
    };
 
});
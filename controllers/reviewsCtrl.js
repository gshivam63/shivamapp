angular.
  module('starter')
  .controller('reviewsCtrl',function($scope, $http, $ionicLoading,$ionicLoading,sharedProperties) {
    
   $scope.updatereviews=function(){
   $scope.$on("$ionicView.enter", function(){
   $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  $scope.index=sharedProperties.getindex();
  $scope.service= sharedProperties.getservice();
  $scope.parent=sharedProperties.getparent();
  $http.get("http://laravel.bonsoul.com/get_venue_details?venueid="+$scope.index+"&parentid="+$scope.parent)
  .success(function (data) {
   $scope.names = data;
  $scope.reviewInfo=angular.fromJson($scope.names.reviewInfo);
  $scope.names = data[$scope.index];
  $scope.id = angular.fromJson(data[$scope.index].id);
    $scope.loading.hide();
    });
   });
  };

});
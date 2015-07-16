angular.
  module('starter')
  .controller('tabCtrl', function($scope, $ionicLoading,$state, $http,$ionicLoading, sharedProperties) {
 
  $scope.getalldata=function(){
  $scope.$on("$ionicView.enter", function(){
    $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  $scope.index=sharedProperties.getindex();
  $scope.city = sharedProperties.getString(); 
  $scope.location= sharedProperties.get_location_selected();
  $scope.service= sharedProperties.getservice();
  $scope.parent= sharedProperties.getparent();
  //code 1 fot back button
  $scope.navigate=function(){
    $state.go('eventmenu2.searchresults');
  }
  //code 1 ends here
  //note:some $scope data from this controller is also used for displaying data in info tabs because this controller is working as parent controller
  $http.get("http://laravel.bonsoul.com/get_venue_details?venueid="+$scope.index+"&parentid="+$scope.parent)
  .success(function (data) {
  $scope.names = data;
  $scope.avgRating=angular.fromJson($scope.names.venuerating);
  $scope.venueinfo=angular.fromJson(data.venueInfo);
  $scope.venueinfo_title=angular.fromJson(data.venueInfo[0]);
  $scope.reviewInfo=angular.fromJson($scope.names.reviewInfo);
  $scope.reviewlength=$scope.reviewInfo[0].length;
  $scope.pagetitle=$scope.venueinfo_title[0].name;
  $scope.loading.hide();
  });
 });
 }
 
});
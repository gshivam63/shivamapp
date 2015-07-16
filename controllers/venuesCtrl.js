angular.
  module('starter')
  .controller('venuesCtrl', function($scope, $http,$state,$ionicLoading, sharedProperties) {
   $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  $scope.city = sharedProperties.getString(); 
  $scope.location= sharedProperties.get_location_selected();
  $scope.service= sharedProperties.getservice();
  $http.get("http://laravel.bonsoul.com/get_venues?city="+$scope.city+"&service="+$scope.service+"&location="+$scope.location)
  .success(function (data) {
  $scope.names = data;
  var count=$scope.names.length;
  $scope.setindex=function(indexvalue)
  {
    $scope.index_selected=indexvalue;
    sharedProperties.setindex($scope.index_selected);
  }
   $scope.navigate_look=function(){
    $state.go('eventmenu2.look_and_book');
  }
  $scope.photos=[];
  $scope.spaname=[];
  $scope.rating=[];
  $scope.indexid=[];
   var i=0;
  /* angular.fromJson will convert string data into json object */
  for(i=0;i<count;i++)
  {
  $scope.photos[i] = angular.fromJson(data[i].photos);
  }
   for(i=0;i<count;i++)
  {
  $scope.spaname[i] = $scope.names[i].name;
  }
   for(i=0;i<count;i++)
  {
  $scope.rating[i] = $scope.names[i].venuestats.averageRating;
  }
    for(i=0;i<count;i++)
  {
  $scope.indexid[i] = $scope.names[i].id;
  }
  });
   $scope.loading.hide();
});
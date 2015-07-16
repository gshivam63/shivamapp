angular.module('starter')
.controller('myfavoritesCtrl',function($scope, $http,$state,$ionicLoading, sharedProperties) {
  
  //code 1 for back button
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
  //code 1 ends here
  $scope.getmyfavorites = function() {
  $scope.$on("$ionicView.enter", function(){
   $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  $scope.userid = sharedProperties.getuserid(); 
  $http.get("http://laravel.bonsoul.com/get_favorite?userid="+$scope.userid)
  .success(function (data) {
  $scope.myfavorites = data;
  var count=$scope.myfavorites.length;
  $scope.setindex=function(indexvalue)
  {
    $scope.index_selected=indexvalue;
    sharedProperties.setindex($scope.index_selected);
  }
  $scope.photos=[];
  $scope.spaname=[];
  $scope.rating=[];
  $scope.indexid=[];
   var i=0;
  /* angular.fromJson will convert string data into json object */
  for(i=0;i<count;i++)
  {
  $scope.photos[i] = angular.fromJson(data[i].venuedet.photos);
  }
   for(i=0;i<count;i++)
  {
  $scope.spaname[i] = $scope.myfavorites[i].venuedet.name;
  }
   for(i=0;i<count;i++)
  {
  $scope.rating[i] = $scope.myfavorites[i].rating.averageRating;
  }
  for(i=0;i<count;i++)
  {
  $scope.indexid[i] = $scope.myfavorites[i].venueid;
  }
   $scope.loading.hide();
    });
  });

  };
 
});
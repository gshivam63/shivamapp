angular.module('starter')
.controller('myreviewsCtrl',function($scope, $http,$state,$ionicLoading, sharedProperties) {
 
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
  $scope.getmyreviews = function() {
  $scope.$on("$ionicView.enter", function(){
    $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  $scope.userid = sharedProperties.getuserid(); 
  $http.get("http://laravel.bonsoul.com/get_user_reviews?userid="+$scope.userid)
  .success(function (data) {
  $scope.myreviews=data;
  var len=$scope.myreviews.length;
  $scope.avgRating=[];
  var i=0;
  for(i=0;i<len;i++)
  {
    $scope.avgRating[i]=angular.fromJson(data[i].rating);
  }
  $scope.loading.hide();
    });
  });
    
  };
  //code for calling repeat method n number of times where n=rating by user
  $scope.repeat=function(n)
  {
    return new Array(n);
  }

});
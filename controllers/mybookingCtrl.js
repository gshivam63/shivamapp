angular.module('starter')
.controller('mybookingCtrl',function($scope,$state, $http,$ionicLoading, sharedProperties) {
  
  //code 1 for back button
  $scope.navigatehome=function(){
    $state.go('eventmenu.home.homecontent');
  }
  //code 1 ends here
  //code 2 for getting user favorites list
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
  $http.get("http://laravel.bonsoul.com/get_booked_appointment?userid="+$scope.userid)
  .success(function (data) {
      //toggle donebooking class if no data is received 
    if(data==""){
      $scope.donebooking=true;
    }
    else{
      $scope.donebooking=false;
      $scope.mybookings=data;
      var count=$scope.mybookings.length;
  $scope.setappid=function(indexvalue1,indexvalue2)
  {
    $scope.index_selected=indexvalue1;
    sharedProperties.setappid($scope.index_selected);
    sharedProperties.setvenueid(indexvalue2);
  }
  //this code create empty arrays and assign values to them in for loop according to the index encountered
  $scope.photos=[];
  $scope.spaname=[];
  $scope.bookingtime=[];
  $scope.bookingdate=[];
  $scope.treatments=[];
  $scope.appid=[];
  $scope.venueid=[];
   var i=0;
  /* angular.fromJson will convert string data into json object */
  for(i=0;i<count;i++)
  {
  $scope.photos[i] = angular.fromJson(data[i].venueimages);
  }
   for(i=0;i<count;i++)
  {
  $scope.spaname[i] = data[i].venuename;
  }
   for(i=0;i<count;i++)
  {
  $scope.bookingtime[i] = data[i].bookingtime;
  }
   for(i=0;i<count;i++)
  {
  $scope.bookingdate[i] = data[i].bookingdate;
  }
    for(i=0;i<count;i++)
  {
  $scope.treatments[i] = data[i].treatments.length;
  }
    for(i=0;i<count;i++)
  {
  $scope.appid[i] = data[i].appointmentid;
  }
    for(i=0;i<count;i++)
  {
  $scope.venueid[i] = data[i].venueid;
  }
    $scope.loading.hide();
    }//else ends here
    });
  });
  };
  //code 2 ends here

});
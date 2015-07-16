angular.module('starter')
.controller('app_detailsCtrl',function($scope, $http,$state,$ionicLoading, sharedProperties) {
   $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  //code 1-for back button
   $scope.navigatemybookings=function(){
    $state.go('eventmenu2.bookings');
  }
  //code 1 ends here
  $scope.appid=sharedProperties.getappid();
  $scope.venueid=sharedProperties.getvenueid();
  //code 2 for appointment details
  $http.get("http://laravel.bonsoul.com/get_appointment_details?appointmentid="+$scope.appid)
  .success(function (data) {
    $scope.details=data;
    $scope.servicedetails=angular.fromJson($scope.details.servicedetails);
    
  });
  // code 2 ends here
  //code 3 for retrieving spa name 
   $http.get("http://laravel.bonsoul.com/get_venue_details?venueid="+$scope.venueid+"&parentid=all")
	  .success(function (mydata) {
	     $scope.names=angular.fromJson(mydata.venueInfo[0]);
       $scope.loading.hide();
	  });
  //code 3 ends here
});
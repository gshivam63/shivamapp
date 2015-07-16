angular.module('starter')
.controller('mybookingCtrl',function($scope, $http,$ionicLoading, sharedProperties) {
  
  $scope.getmyfavorites = function() {
  $scope.$on("$ionicView.enter", function(){
  $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  $scope.appointmentid = sharedProperties.getappointmentid(); 
  $http.get("http://laravel.bonsoul.com/get_appointment_details?appointmentid="+$scope.appointmentid)
  .success(function (data) {
    $scope.details=data;
    $scope.loading.hide();
  });
});
}

});
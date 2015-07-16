angular.
  module('starter')
  .controller('homeCtrl',function($scope, $http, $state, sharedProperties) {
  //code 4 for getting location
  $scope.get_location_selected = function() {
   $scope.$on("$ionicView.enter", function(){
  $scope.location = sharedProperties.get_location_selected(); 
	});
  };
  //code 4 ends here
  //code 5 for getting selected service
  $scope.getservice = function() {
  $scope.$on("$ionicView.enter", function(){
  $scope.service = sharedProperties.getservice();
   });
  };
  //code 5 ends here
  //code 1 for back button
  $scope.navigate2=function(){
    $state.go('eventmenu.home.homecontent');
  }
  //code 1 ends here
  //code 2 for reteriving search results of pick and book appointment
  $scope.getservice = function() {
  $scope.$on("$ionicView.enter", function(){
  $scope.city = sharedProperties.getString(); 
  $scope.select_location= sharedProperties.get_location_selected();
  if($scope.select_location=="")
  {
    $scope.location="select location";
  }
  else
  {
  $scope.location= sharedProperties.get_location_selected();
  }
  $scope.select_service= sharedProperties.getservice();
  if($scope.select_service=="")
  {
    $scope.service="select service";
  }
  else
  {
  $scope.service= sharedProperties.getservice();
  }
  $http.get("http://laravel.bonsoul.com/get_venues?city="+$scope.city+"&service="+$scope.service+"&location="+$scope.location)
  .success(function (data) {
  $scope.names = data;
  $scope.length_rlt=$scope.names.length;
  });
   });
  };
  //code 2 ends here
  //code 3 for navigating to pick and book only if searchresults>0
  $scope.spacheck=function(value){
    if(value>0)
    {
      $state.go('eventmenu2.searchresults');
    }
  }
  //code 3 ends here
});
angular.
  module('starter')
  .controller('menuCtrl', function($scope, $http, $state,$ionicLoading, sharedProperties) {
  $scope.updatemenu=function(){
  $scope.$on("$ionicView.enter", function(){ 
   $scope.loading = $ionicLoading.show({
    content: '<div class="ionic-logo"></div>',
    animation: 'fade-in',
    showBackdrop: true,
    maxWidth: 0,
    showDelay: 0
  });
  //code 1 for getting menuInfo
  $scope.index=sharedProperties.getindex();
  $scope.city = sharedProperties.getString(); 
  $scope.location= sharedProperties.get_location_selected();
  $scope.service= sharedProperties.getservice();
  $scope.parent= sharedProperties.getparent();
  $http.get("http://laravel.bonsoul.com/get_venue_details?venueid="+$scope.index+"&parentid="+$scope.parent)
  .success(function (data) {
    $scope.menuinfo=data.menuInfo;
    $scope.loading.hide();
    });
  //code 1 ends here
  //code 2 for pushing and poping menuitems in booking list
  $scope.addtobooking=function(selectedmenu)
  {
   var index = $scope.BookingList.indexOf(selectedmenu);
   if(index>0)
   {
     $scope.BookingList.splice(index, 1);
   }
   else
   {
     $scope.BookingList.push(selectedmenu);
     $scope.selectedmenu={};
   }
  }
  $scope.BookingList=[ {} ]
  //code 3 -- if booking list is not empty navigate to menudate page and stores bookinglist in a console variable 'bookinglist'
  $scope.addbookingdetails=function($event){
      if($scope.BookingList=="[object Object]")
      {
        alert("Please select atleast an item to contiue");
      }
      else
      {
      sharedProperties.setbookingdetails($scope.BookingList);
      console.log('bookinglist',$scope.BookingList);
      $state.go('eventmenu2.searchresults_clicked.menudate');
      }
    }
   //code 3 ends here
  });
  };
});
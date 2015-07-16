angular.
  module('starter')
  .controller('venues_clickedCtrl', function($scope, $ionicLoading, $http,$ionicLoading, sharedProperties) {
   
  $scope.updatedata=function(){
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
  $scope.parent=sharedProperties.getparent();
  $http.get("http://laravel.bonsoul.com/get_venue_details?venueid="+$scope.index+"&parentid="+$scope.parent)
  .success(function (data) {
  $scope.names = data;
  $scope.photos = angular.fromJson(data[$scope.index].photos);
  $scope.timings=angular.fromJson(data[$scope.index].operationalTimings);
  $scope.loading.hide();
  });
  });
}
//code 1 for setting from and to timings of spa
    $scope.start=function(value1,value2){
    $scope.schedule = [{"morning":"", "evening":""}];
    $scope.schedule.push({morning:value1,evening:value2});
    sharedProperties.setFromTime(value1);
    sharedProperties.setToTime(value2);
    }
   //code for toggling open and close class
    $scope.isTimeUp = function(time1,time2) {
          var hour, minute;
          if(time1.split(" ")[1] == 'PM') {
              hour1 = parseInt(time1.split(":")[0]) + 12;
          } 
          else {
              hour1 = parseInt(time1.split(":")[0]);
          }
          minute1 = parseInt(time1.split(":")[1]);  
          if(time2.split(" ")[1] == 'PM') {
              hour2 = parseInt(time2.split(":")[0]) + 12;
          } 
          else {
              hour2 = parseInt(time2.split(":")[0]);
          }
          minute2 = parseInt(time2.split(":")[1]);
          var today = new Date();
          var givenDate1 = new Date();
          givenDate1.setHours(hour1);
          givenDate1.setMinutes(minute1);
          var givenDate2 = new Date();
          givenDate2.setHours(hour2);
          givenDate2.setMinutes(minute2);
          if(givenDate1 > today || today > givenDate2) {
              $scope.myHTML='CLOSE';
              return true;
          } 
          else {
              $scope.myHTML='OPEN';
              return false;
          }
    }
//code 1 ends here
// this code add and remove favorites and store them in console
    $scope.addtofavorites=function(favoritespaname){
    var favoritesindex=$scope.FavoritesList.indexOf(favoritespaname);
    if(favoritesindex>0)
    {
      $scope.FavoritesList.splice(favoritesindex, 1);
      console.log($scope.FavoritesList);
    }
    else
    {
      $scope.FavoritesList.push(favoritespaname);
      $scope.favoritespaname={};
      console.log($scope.FavoritesList);
    }
  }
  $scope.FavoritesList=[{}]
  //add to facorites script ends
   $scope.toggleIcon = function(togglevalue){
    if(togglevalue=="8:00 AM"){
      $scope.isopen = true;
    }
    else{
      $scope.isopen = false;
    }
  }
  //toggle facilities

  $scope.toggleIcon1 = function(togglevalue){
    if(togglevalue==1){
      $scope.isparking = true;
    }
    else{
      $scope.isparking = false;
    }
  }

  $scope.toggleIcon2 = function(togglevalue){
    if(togglevalue==1){
      $scope.iscredit = true;
    }
    else{
      $scope.iscredit = false;
    }
  }
  $scope.toggleIcon3 = function(togglevalue){
    if(togglevalue==1){
      $scope.isshower = true;
    }
    else{
      $scope.isshower = false;
    }
  }
  $scope.toggleIcon4 = function(togglevalue){
    if(togglevalue==1){
      $scope.islocker = true;
    }
    else{
      $scope.islocker = false;
    }
  }
  $scope.toggleIcon5 = function(togglevalue){
     if(togglevalue==1){
      $scope.istowel = true;
    }
    else{
      $scope.istowel = false;
    }
  }
  
  //scriptends
   $scope.repeat=function(n)
  {
    return new Array(n);
  }

});
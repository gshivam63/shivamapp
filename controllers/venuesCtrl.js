angular.
  module('starter')
  .controller('venuesCtrl', function($scope, $http, sharedProperties) {
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
  $scope.photos=[];
  $scope.spaname=[];
  $scope.rating=[];
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
  });
});
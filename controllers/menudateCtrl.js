angular.
  module('starter')
  .controller('menudateCtrl', function($scope, $timeout,$state, $http,sharedProperties) {
  //code 1 for selection of date from today to next ten days
  // Note: this code working fine if run separately in browser without ionic framework
  $scope.start = new Date();
  var abc = new Date();
  $scope.end=abc.setDate(abc.getDate()+10);//adding ten days to current date

  $scope.min2 = $scope.start; //init value
  $scope.max2 = $scope.end; //fixed date same as $scope.maxStartDate init value
  
  $scope.$watch('end', function(v){
    $scope.max1 = v;
  });

  $scope.openEnd = function() {
    $timeout(function() {
      $scope.endOpened = true;
    });
  };

  $scope.dateOptions = {
    'year-format': "'yy'",
    'starting-day': 1
  };
  //code 1 ends here
  //code 2 for poping an alert if previous date is selected
  $scope.setBookingdate=function(value){
    if(value<$scope.start)
    {
      alert("select a date within the booking period");  
    }
    else
    { 
      sharedProperties.setBookingdate(value);   
      $state.go('eventmenu2.searchresults_clicked.menutime');    
    }
  }
  //code 2 ends here
});


 
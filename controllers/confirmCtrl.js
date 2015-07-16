angular.
  module('starter')
  .controller('confirmCtrl', function($scope, $timeout, $http,sharedProperties) {
  	$scope.bookinglist=sharedProperties.getbookingdetails();
  	$scope.bookingdate=sharedProperties.getBookingdate();
  	$scope.bookingtime=sharedProperties.getBookingtime();
});


 
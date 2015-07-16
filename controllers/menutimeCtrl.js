angular.
  module('starter')
  .controller('menutimeCtrl', function($scope, $timeout, $http,sharedProperties) {
$scope.settime=function(value){
   sharedProperties.setBookingtime(value);
  }
$scope.from=sharedProperties.getFromTime();
$scope.to=sharedProperties.getToTime();
//code4 for getnumber for calling this method fixed number of times
$scope.getNumber = function(num) {
        return new Array(num);   
    }
//code 4 ends here
//code 1 for getting time in hours and minutes separately from $scope.from starting time
var time1 = $scope.from;
var hrs1 = Number(time1.match(/^(\d+)/)[1]);
var mnts1 = Number(time1.match(/:(\d+)/)[1]);
var format1 = time1.match(/\s(.*)$/)[1];
if (format1 == "PM" && hrs1 < 12) hrs1 = hrs1 + 12;
if (format1 == "AM" && hrs1 == 12) hrs1 = hrs1 - 12;
var hours1 = hrs1.toString();
var minutes1 = mnts1.toString();
if (hrs1 < 10) hours1 = "0" + hours1;
if (mnts1 < 10) minutes1 = "0" + minutes1;
//alert(hours1 + ":" + minutes1);
$scope.Starting=hours1+":"+minutes1;
//code 1 ends here
//code 2 for getting time in hours and minutes separately from $scope.to ending time
var time2 = $scope.to;
var hrs2 = Number(time2.match(/^(\d+)/)[1]);
var mnts2 = Number(time2.match(/:(\d+)/)[1]);
var format2 = time2.match(/\s(.*)$/)[1];
if (format2 == "PM" && hrs2 < 12) hrs2 = hrs2 + 12;
if (format2 == "AM" && hrs2 == 12) hrs2 = hrs2 - 12;
var hours2 = hrs2.toString();
var minutes2 = mnts2.toString();
if (hrs2 < 10) hours2 = "0" + hours2;
if (mnts2 < 10) minutes2 = "0" + minutes2;
//alert(hours2 + ":" + minutes2);
$scope.Ending=hours2+":"+minutes2;
//code 2 ends here
//code 3 for diving the $scoep.from and $scope.to time in intervals of 30 minutes
$scope.diff=hours2-hours1;
$scope.hourarray=[];
$scope.timearray=[];
if(minutes1=="00")
{
$scope.hourarray[0]=hours1;
$scope.timearray[0]=30;
var i=0;
$scope.len=parseInt(2*$scope.diff)-1;
for(i=0;i<$scope.len;i=i+2)
  {
  $scope.hourarray[i+1]=parseInt($scope.hourarray[i])+1;
  $scope.timearray[i+1]=parseInt($scope.timearray[i])+30;
    if($scope.timearray[i+1]==60)
    {
    $scope.timearray[i+1]="00";
    }
  $scope.hourarray[i+2]=$scope.hourarray[i+1];
  $scope.timearray[i+2]=parseInt($scope.timearray[i+1])+30;
    if($scope.timearray[i+2]==60)
    {
    $scope.timearray[i+2]="00";
    }
  }
}
else
{
$scope.len=parseInt(2*$scope.diff)-1;
$scope.hourarray[0]=parseInt(hours1)+1;
$scope.timearray[0]="00";
var i=0;
for(i=0;i<$scope.len;i=i+2)
  {
  $scope.hourarray[i+1]=parseInt($scope.hourarray[i]);
  $scope.timearray[i+1]=parseInt($scope.timearray[i])+30;
    if($scope.timearray[i+1]==60)
    {
    $scope.timearray[i+1]="00";
    }
  $scope.hourarray[i+2]=$scope.hourarray[i+1]+1;
  $scope.timearray[i+2]=parseInt($scope.timearray[i+1])+30;
    if($scope.timearray[i+2]==60)
    {
    $scope.timearray[i+2]="00";
    }
  }
}
//code 3 ends here
});


 
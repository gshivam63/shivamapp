angular.module('starter')
   .controller('RatingCtrl', function($state, $scope) {
   	$scope.navigatesearchresults_clicked=function(){
    $state.go('eventmenu2.searchresults_clicked.info');
    }
   	//code 1 for getting rating when user click on stars and storing user rating in console variable rating and user review in console 
   	//variable 'userreview'
   	$scope.user_review="";
    $scope.rating = 5;
    $scope.rateFunction = function(rating) {
      console.log('rating',rating);
      console.log('userreview',$scope.user_review);
    };
  })
   //directive code
  .directive('starRating',
	function() {
		return {
			restrict : 'A',
			template : '<div class="rating" style="margin-top:30px;">'
					 + '	<span style="padding:10px;" ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
					 + '<i class="icon ion-star" style="font-size:30px;"></i>'
					 + '</span>'
					 + '</div>',
			scope : {
				ratingValue : '=',
				max : '=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				var updateStars = function() {
					scope.stars = [];
					for ( var i = 0; i < scope.max; i++) {
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.toggle = function(index) {
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				);
			}
		};
	}
);
  //directive code ends here
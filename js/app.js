// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.router','ui.bootstrap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('eventmenu', {
      url: "/event",
      abstract:true,
      views:{
        'view1':{
      templateUrl: "template/event-menu.html"
    }
    }
    })
    .state('eventmenu2', {
      url: "/event2",
      abstract:true,
      views:{
        'view1':{
      templateUrl: "template/event-menu2.html"
    }
    }
    })
     .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "template/home.html"
        }
      }
    })
    .state('eventmenu.home.homecontent', {
      url: "/homecontent",
      views: {
        'inception' :{
          templateUrl: "template/homecontent.html"
        },
        'toggleview':{
          templateUrl:"template/toggleview.html"
        }
      }
    })
    .state('eventmenu2.look_and_book', {
      url: "/look_and_book",
      views: {
        'menuContent' :{
          templateUrl: "template/look_and_book.html",
        controller:'homeCtrl'
        }
      }
    })
    .state('eventmenu2.surpriseme', {
      url: "/surpriseme",
      views: {
        'menuContent' :{
          templateUrl: "template/surpriseme.html",
          controller:'surprisemeCtrl'
        }
      }
    })
    .state('eventmenu2.bookings', {
      url: "/bookings",
      views: {
        'menuContent' :{
          templateUrl: "template/bookings.html",
          controller:"mybookingCtrl"
        }
      }
    })
    .state('eventmenu2.location', { 
      url: "/location",
      views: {
        'menuContent' :{
          templateUrl: "template/location.html",
        controller:'locationCtrl'
        }
      }
    })
    .state('eventmenu2.selectcity', {
      url: "/selectcity",
      views: {
        'menuContent' :{
          templateUrl: "template/selectcity.html",
        controller:'citiesCtrl'
        }
      }
    })
    .state('eventmenu2.services', {
      url: "/services",
      views: {
        'menuContent' :{
          templateUrl: "template/services.html",
        controller: 'servicesCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults', {
      url: "/searchresults",
      views: {
        'menuContent' :{
          templateUrl: "template/searchresults.html",
        controller: 'venuesCtrl'
        }
      }
    })
    .state('eventmenu2.app_details', {
      url: "/app_details",
      views: {
        'menuContent' :{
          templateUrl: "template/app_details.html",
        controller: 'app_detailsCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults_clicked', {
      url: "/searchresults_clicked",
      views: {
        'menuContent' :{
          templateUrl: "template/searchresults_clicked.html",
          controller:'tabCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults_clicked.info', {
      url: "/info",
      views: {
        'info-tab' :{
          templateUrl: "template/info.html",
          controller:'venues_clickedCtrl'
        }
      }
    })
    .state('eventmenu2.writereview', {
      url: "/writereview",
      views: {
        'menuContent' :{
          templateUrl: "template/writereview.html",
          controller:'RatingCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults_clicked.menu', {
      url: "/menu",
      views: {
        'menu-tab' :{
          templateUrl: "template/menu.html",
          controller:'menuCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults_clicked.menudate', {
      url: "/menudate",
      views: {
        'menu-tab' :{
          templateUrl: "template/menudate.html",
          controller:'menudateCtrl'
        }
      }
    })
     .state('eventmenu2.searchresults_clicked.menutime', {
      url: "/menutime",
      views: {
        'menu-tab' :{
          templateUrl: "template/menutime.html",
          controller:'menutimeCtrl'
        }
      }
    })
      .state('eventmenu2.searchresults_clicked.confirm', {
      url: "/confirm",
      views: {
        'menu-tab' :{
          templateUrl: "template/confirm.html",
          controller:'confirmCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults_clicked.gallery', {
      url: "/gallery",
      views: {
        'gallery-tab' :{
          templateUrl: "template/gallery.html",
          controller:'venues_clickedCtrl'
        }
      }
    })
    .state('eventmenu2.searchresults_clicked.reviews', {
      url: "/reviews",
      views: {
        'reviews-tab' :{
          templateUrl: "template/reviews.html",
          controller:'reviewsCtrl'
        }
      }
    })
  .state('eventmenu.home.myreviews', {
      url: "/myreviews",
      views: {
        'inception' :{
          templateUrl: "template/myreviews.html",
          controller:'myreviewsCtrl'
        }
      }
    })
    .state('eventmenu.home.myfavorites', {
      url: "/myfavorites",
      views: {
        'inception' :{
          templateUrl: "template/myfavorites.html",
          controller:'myfavoritesCtrl'
        }
      }
    })
    .state('eventmenu.home.editprofile', {
      url: "/editprofile",
      views: {
        'inception' :{
          templateUrl: "template/editprofile.html",
          controller:'editprofileCtrl'
        }
      }
    })
    .state('eventmenu.home.logout', {
      url: "/logout",
      views: {
        'inception' :{
          templateUrl: "template/logout.html",
          controller:'logoutCtrl'
        }
      }
    })
    .state('eventmenu.home.terms_and_conditions', {
      url: "/terms_and_conditions",
      views: {
        'inception' :{
          templateUrl: "template/terms_and_conditions.html",
          controller:'terms_and_conditionsCtrl'
        }
      }
    })
    .state('eventmenu.home.privacy', {
      url: "/privacy",
      views: {
        'inception' :{
          templateUrl: "template/privacy.html",
          controller:'privacyCtrl'
        }
      }
    })
  $urlRouterProvider.otherwise('/event/home/homecontent');
});


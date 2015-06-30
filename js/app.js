// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
    .state('eventmenu.look_and_book', {
      url: "/look_and_book",
      views: {
        'menuContent' :{
          templateUrl: "template/look_and_book.html",
        controller:'homeCtrl'
        }
      }
    })
    .state('eventmenu.surpriseme', {
      url: "/surpriseme",
      views: {
        'menuContent' :{
          templateUrl: "template/surpriseme.html"
        }
      }
    })
    .state('eventmenu.bookings', {
      url: "/bookings",
      views: {
        'menuContent' :{
          templateUrl: "template/bookings.html"
        }
      }
    })
    .state('eventmenu.location', {
      url: "/location",
      views: {
        'menuContent' :{
          templateUrl: "template/location.html",
        controller:'locationCtrl'
        }
      }
    })
    .state('eventmenu.selectcity', {
      url: "/selectcity",
      views: {
        'menuContent' :{
          templateUrl: "template/selectcity.html",
        controller:'citiesCtrl'
        }
      }
    })
    .state('eventmenu.services', {
      url: "/services",
      views: {
        'menuContent' :{
          templateUrl: "template/services.html",
        controller: 'servicesCtrl'
        }
      }
    })
    .state('eventmenu.searchresults', {
      url: "/searchresults",
      views: {
        'menuContent' :{
          templateUrl: "template/searchresults.html",
        controller: 'venuesCtrl'
        }
      }
    })
    .state('eventmenu.searchresults_clicked', {
      url: "/searchresults_clicked",
      views: {
        'menuContent' :{
          templateUrl: "template/searchresults_clicked.html",
          controller: 'venues_clickedCtrl'
        }
      }
    })
    .state('eventmenu.searchresults_clicked.info', {
      url: "/info",
      views: {
        'info-tab' :{
          templateUrl: "template/info.html",
          controller:'venues_clickedCtrl'
        }
      }
    })
    .state('eventmenu.searchresults_clicked.menu', {
      url: "/menu",
      views: {
        'menu-tab' :{
          templateUrl: "template/menu.html"
        }
      }
    })
    .state('eventmenu.searchresults_clicked.gallery', {
      url: "/gallery",
      views: {
        'gallery-tab' :{
          templateUrl: "template/gallery.html",
          controller:'venues_clickedCtrl'
        }
      }
    })
    .state('eventmenu.searchresults_clicked.reviews', {
      url: "/reviews",
      views: {
        'reviews-tab' :{
          templateUrl: "template/reviews.html"
        }
      }
    })
   .state('eventmenu.home.home1', {
      url: "/home1",
      views: {
        'inception' :{
          templateUrl: "template/home1.html"
        }
      }
    })
        .state('eventmenu.home.home2', {
      url: "/home2",
      views: {
        'inception' :{
          templateUrl: "template/home2.html"
        }
      }
    })

  $urlRouterProvider.otherwise("/event/home/homecontent");
});



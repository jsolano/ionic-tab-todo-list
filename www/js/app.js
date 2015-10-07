// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'ngStorage'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: '/todo',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.todo-biz', {
    url: '/biz',
    views: {
      'todo-biz': {
        templateUrl: 'templates/todo-biz.html',
        controller: 'TodoBizCtrl'
      }
    }
  })

  .state('tab.todo-home', {
      url: '/home',
      views: {
        'todo-home': {
          templateUrl: 'templates/todo-home.html',
          controller: 'TodoHomeCtrl'
        }
      }
    })

  .state('tab.todo-jobs', {
    url: '/jobs',
    views: {
      'todo-jobs': {
        templateUrl: 'templates/todo-jobs.html',
        controller: 'TodoJobsCtrl'
      }
    }
  })

  .state('tab.settings', {
    url: '/settings',
    views: {  
      'settings': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  })

  .state('tab.friends', {
    url: '/friends',
    views: {
      'settings': {
        templateUrl: 'templates/friends.html',
        controller: 'FriendsCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/todo/biz');

});

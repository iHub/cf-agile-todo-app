// require('./base')();
require('angular');
require('angular-ui-router');

(function() {
  'use strict';

  window.app = angular.module('todoapp', []);

  todoapp.controller('listing', require('./services/list.service'));
  todoapp.controller('TodoAppController', ['$scope', '$rootScope', 'listing', require('./controllers/app.controller')]);

  window.app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      // For any unmatched url, redirect to /state1
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          controller: function($scope) {},
          templateUrl: 'views/home.html'
        });

      $locationProvider.html5Mode(true);
    }
  ]);
})();

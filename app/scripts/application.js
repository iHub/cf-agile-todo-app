// require('./base')();
require('angular');
require('angular-ui-router');

(function() {
  'use strict';
  angular.module('todoapp.controllers', []);
  angular.module('todoapp.services', []);
  angular.module('todoapp.filters', []);
  angular.module('todoapp.directives', []);

  window.app = angular.module('todoapp', [
    'todoapp.controllers',
    'todoapp.services',
    'todoapp.filters',
    'todoapp.directives',
    'ui.router',
  ]);

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

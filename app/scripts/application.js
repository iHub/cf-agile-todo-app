// require('./base')();
var angular = require('angular');
require('angular-ui-router');
require('angular-resource');

(function() {
  'use strict';

  window.app = angular.module('todoapp', []);

  todoapp.factory('Todos', ['$resource', require('./factories/todo.resource')]);
  todoapp.controller('AppController', ['$scope', require('./controllers/app.controller')]);
  todoapp.controller('TodoController', ['$scope', 'Todos', require('./controllers/todo.controller')]);

  window.app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
      // For any unmatched url, redirect to / (root route)
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          controller: 'TodoController',
          templateUrl: 'views/home.html'
        });

      $locationProvider.html5Mode(true);
    }
  ]);
})();

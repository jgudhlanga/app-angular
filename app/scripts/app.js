'use strict';

/**
 * @ngdoc overview
 * @name angularappApp
 * @description
 * # angularappApp
 *
 * Main module of the application.
 */
angular.module('angularappApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider, $compileProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/project', {
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl',
            controllerAs: 'ProjectCtrl'
        })
        .when('/addeditproject', {
            templateUrl: 'views/addeditproject.html',
            controller: 'ProjectCtrl',
            controllerAs: 'ProjectCtrl'
        })
        .when('/projecttask/:pk', {
            templateUrl: 'views/projecttask.html',
            controller: 'ProjectCtrl',
            controllerAs: 'ProjectCtrl'
        })
        .when('/addeditproject/:pk', {
            templateUrl: 'views/addeditproject.html',
            controller: 'ProjectCtrl',
            controllerAs: 'ProjectCtrl'
        })
        .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/'
      });
      $compileProvider.debugInfoEnabled(false);
      $locationProvider.html5Mode(true);
  });

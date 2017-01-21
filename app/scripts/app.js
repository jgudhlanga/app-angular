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
  .config(function ($routeProvider) {
    $routeProvider
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
        })
        .when('/project', {
            templateUrl: 'views/project.html',
            controller: 'ProjectCtrl',
            controllerAs: 'project'
        })
        .when('/editproject', {
            templateUrl: 'views/editproject.html',
            controller: 'ProjectCtrl',
            controllerAs: 'editproject'
        })
        .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .otherwise({
        redirectTo: '/project'
      });
  });

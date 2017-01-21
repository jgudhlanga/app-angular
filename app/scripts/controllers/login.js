'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('LoginCtrl', function ($scope,  AppAuth, $location, $route)  {

        $scope.credentials = {}; // user login credentials initialise
        $scope.getToken = function()
        {
            AppAuth.login($scope.credentials);
            $location.path("#/project")
        }
    });

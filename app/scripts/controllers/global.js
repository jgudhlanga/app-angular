'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:GlobalCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('GlobalCtrl', function ($scope, AppAuth, $cookies, $route)  {
        $scope.token = $cookies.get('token');

        $scope.logout = function()
        {
            AppAuth.logout();
            $route.reload();
        }
    });

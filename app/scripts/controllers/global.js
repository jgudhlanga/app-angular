'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:GlobalCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('GlobalCtrl', function ($scope, AppAuth, $cookies)  {
        $scope.token = $cookies.get('token');
    });

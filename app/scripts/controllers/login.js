'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('LoginCtrl', function ($scope,  AppAuth, $location, $window, $timeout, $cookies)  {

        $scope.credentials = {}; // user login credentials initialise
        $scope.getToken = function()
        {
            AppAuth.login($scope.credentials);
            $timeout(function(){
                if($cookies.get('token'))
                {
                    $location.path("/");
                    $window.location.reload();
                }
                else
                    $scope.error = 'You credentials are not correct';
            }, 1000, true);

        }
    });

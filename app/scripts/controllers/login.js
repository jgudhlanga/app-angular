'use strict';

/**
 * @ngdoc function
 * @name angularappApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('LoginCtrl', function ($scope, $http, $location, $cookieStore )  {

        $scope.credentials = {}; // user login credentials initialise
        $scope.token = $cookieStore.get('token');
        //if the log in is not successful show the error
        var onError = function(reason)
        {
            $scope.error = reason;
        }
        //when the request is complete pass the token to the view
        var OnRequestComplete = function(response)
        {
            var objToken = response.data;
            $cookieStore.put('token',objToken.token);
          //  console.log($cookieStore.get('token'));
            $scope.token = $cookieStore.get('token');
        }

        $scope.getToken = function()
        {
            $http.post("http://userservice.staging.tangentmicroservices.com/api-token-auth/", $scope.credentials).then(OnRequestComplete, onError);
        }
    });

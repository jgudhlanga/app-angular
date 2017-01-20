'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('ProjectCtrl', function ($scope, $http, $cookieStore )  {

        $scope.token = $cookieStore.get('token');
        var onError = function(reason)
        {
            $scope.error = reason;
        }
        var OnRequestComplete = function(response)
        {
            $scope.projects = response.data;
        }
        var dataConfig = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Token ' + $cookieStore.get('token')
            }
        }
        $http.get("http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/", dataConfig).then(OnRequestComplete, onError);

        //Save a project here
        //initialise the post data object
        $scope.projectData = {

        };
        var onComplete = function (response) {
            $scope.results = response.data;
        }

        $scope.postProject = function()
        {
            $http({
                    method: 'POST',
                    url: "http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/",
                    data: $scope.projectData
                ,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ' + $cookieStore.get('token')
                }
            }).then(onComplete, onError);
        }
    });

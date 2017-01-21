'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('ProjectCtrl', function ($scope, $http, $cookieStore, $location )  {

        // function to capture errors
        var onError = function(reason)
        {
            $scope.error = reason;
        }
        $scope.token = $cookieStore.get('token');
        var config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Token ' + $cookieStore.get('token')
            }
        }
        $http.get("http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/", config).then(
            function(response){
                $scope.projects = response.data;
            },onError);

        //Save a project here
        //initialise the post data object
        $scope.projectData = { };
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
            }).then(
                function(response){
                    $scope.projects += response.data;
            },onError);
            //redirect to the projects page
            $location.path("#/project");
        }

        $scope.deleteProject = function(pk)
        {
            //$http.delete('http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/'+pk+'/');
           /$http({
                method: 'DELETE',
                url: 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/' + pk +'/',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ' + $cookieStore.get('token')
                }
            }).then(
                function(response){
                    $scope.message = response.data;
                }, onError);
            //redirect to the projects page
            $location.path("#/project");
        }

        //get the project to edit
        var pk = 1;
        $http.get("http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"+ pk +"/", config).then(function(response)
        {
            $scope.project = response.data;
        },onError);

        $scope.updateProject = function()
        {
           //console.log($scope.project);
            $http({
                method: 'PUT',
                url: "http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"+$scope.project.pk+"/",
                data: $scope.project
                ,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ' + $cookieStore.get('token')
                }
            }).then(
                function(response){
                    $scope.project += response.data;
                },onError);
            //redirect to the projects page
            $location.path("#/project");
        }
    });

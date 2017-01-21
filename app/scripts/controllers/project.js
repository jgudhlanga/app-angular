'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('ProjectCtrl', function ($scope, $http, project, $cookieStore, $location, $routeParams )  {

        // function to capture errors
        $scope.token = $cookieStore.get('token');
        var config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Token ' + $cookieStore.get('token')
            }
        }
        var OnRequestComplete = function(data) {
            $scope.projects = data;
        }
         $scope.projects = project.listProjects().then(OnRequestComplete);

        //Save a project here
        //initialise the post data object
        $scope.projectData = { };
        $scope.postProject = function()
        {
            project.postProject($scope.projectData);
            //redirect to projects list
            $location.path("#/project");
        }

        //get the project to edit only if the routeParam pk is set
        if ($routeParams.pk) {
            var OnComplete = function(data) {
                $scope.project = data;
            }
            var pk = $routeParams.pk;
            $scope.project = project.getProject(pk).then(OnComplete);
       }

        $scope.updateProject = function()
        {
            project.updateProject($scope.project);
            //redirect to the projects page
            $location.path("#/project");
        }

        $scope.deleteProject = function(pk)
        {
            project.deleteProject(pk);
            //redirect to the projects page
            $location.path("#/project");
        }
    });

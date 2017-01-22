'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('ProjectCtrl', function ($scope, ProjectService, $cookies, $location, $routeParams )  {

        // function to capture errors
        var config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Token ' + $cookies.get('token')
            }
        }
        var OnRequestComplete = function(data) {
            $scope.projects = data;
        }
         $scope.projects = ProjectService.listProjects().then(OnRequestComplete);
        //Save a project here
        //initialise the post data object
        $scope.projectData = { };
        $scope.postProject = function()
        {
            ProjectService.postProject($scope.projectData);
            //redirect to projects list
            $location.path("#/project");
        }

        //get the project to edit only if the routeParam pk is set
        $scope.options = [{
            value: true,
            label: 'true'
        }, {
            value: false,
            label: 'false'
        }];

        if ($routeParams.pk) {
            var OnComplete = function(data) {
                $scope.project = data;
            }
            var pk = $routeParams.pk;
            $scope.project = ProjectService.getProject(pk).then(OnComplete);
       }

        $scope.updateProject = function()
        {
            ProjectService.updateProject($scope.project);
            //redirect to the projects page
            $location.path("#/project");
        }

        $scope.deleteProject = function(pk)
        {
            ProjectService.deleteProject(pk);
            //redirect to the projects page
            $location.path("#/project");
        }
    });

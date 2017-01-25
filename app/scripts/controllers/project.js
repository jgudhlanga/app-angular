'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('ProjectCtrl', function ($scope, ProjectService, $cookies, $location, $routeParams, $route )  {

        var config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Token ' + $cookies.get('token')
            }
        }
        var OnRequestComplete = function(data) {
            $scope.projects = data;
        }

        //get all the projects
        $scope.projects = ProjectService.listProjects().then(OnRequestComplete);

        //initialise the post data object
        $scope.projectData = { };
        //modal specific variables
        
        //get the project to edit only if the routeParam pk is set

        if ($routeParams.pk) {
            var OnComplete = function(data) {
                $scope.projectData = data;
            }
            $scope.header = 'Edit Project';
             $scope.button = 'Update Project';
            var pk = $routeParams.pk;
            $scope.projectData = ProjectService.getProject(pk).then(OnComplete); 
            $scope.postProject = function()
            {      
                ProjectService.updateProject($scope.projectData);
                //redirect to the projects page
                $location.path("/project");
            }
        }
        else
        {
            $scope.header = 'Create New Project';
            $scope.button = 'Save Project';

            $scope.postProject = function()
            {
                ProjectService.postProject($scope.projectData);
                //add the newly added project to the projects
                $scope.projects.push($scope.projectData);
                $location.path("/project");
            }
        }


        $scope.deleteProject = function(id)
        {
            //remove the deleted from the project list
            for(var i = 0; i < $scope.projects.length; i++) {
                if($scope.projects[i].pk == id) {
                    $scope.projects.splice(i, 1);
                    break;
                }
            }
            ProjectService.deleteProject(id);

            //redirect to the projects page
            $location.path("/project");
        }

        });

'use strict';
/**
 * @ngdoc function
 * @name angularappApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the angularappApp
 */
angular.module('angularappApp')
    .controller('ProjectCtrl', function ($scope, ProjectService, $cookies, $location, $routeParams, $route, $templateCache )  {

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
        var curPage = $route.current.templateUrl;//for reloading the current template
        $scope.projectData = { };
        $scope.postProject = function()
        {
            ProjectService.postProject($scope.projectData);
            //add the newly added project to the projects
            $scope.projects.push($scope.projectData);
            $location.path("/project");
        }

        //get the project to edit only if the routeParam pk is set
        $scope.options = [{
            value: 1,label: 'true'
        }, {
            value: 0,label: 'false'
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
            $location.path("/project");
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

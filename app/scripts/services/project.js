//This service will manage the project  CRUD
(function() {
    //define the service i.e the service name
    //the service depends http service which is inbuilt in angular
    var ProjectService = function($http, $cookies) {
        var config = {
            headers: {
                'content-type' : 'application/json',
                'Authorization' : 'Token ' + $cookies.get('token')
            }
        }

        //1. declare service function listProjects which will get all the projects from the web api
        var listProjects = function() {
            return $http.get("http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/", config)
                .then(function(response) {
                    return response.data;
                },
                function(reason){
                    return reason;
                });
        };

        //2 save project
        var postProject = function(postData)
        {
            $http({
                method: 'POST',
                url: "http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/",
                data: postData
                ,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ' + $cookies.get('token')
                }
            }).then(
                function(response){
                   return  response.data;
                },
                function(reason){
                    return reason;
                });
        }

        //3 get a single project
        var getProject = function(pk)
        {
           return $http.get("http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"+ pk +"/", config)
                .then(function(response)
                {
                    return  response.data;
                },
                function(message){
                    return message;
                }
            );
        }
         //4 update project
        var updateProject = function(updateData)
        {
            //console.log($scope.project);
           return  $http({
                method: 'PUT',
                url: "http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/"+updateData.pk+"/",
                data: updateData
                ,
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ' + $cookies.get('token')
                }
            }).then(
                function(response){
                    return  response.data;
                },
                function(message)
                {
                    return message
                });
        }

        //5 delete project
        var deleteProject = function(pk)
        {
           return  $http({
                method: 'DELETE',
                url: 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/' + pk +'/',
                headers: {
                    'content-type': 'application/json',
                    'Authorization': 'Token ' + $cookies.get('token')
                }
            }).then(
                function(response){
                    return response.data;
                },
               function(message){
                   return message;
               });
        }

        //return the public API i.e an object
        return {
            listProjects: listProjects,
            postProject: postProject,
            getProject: getProject,
            updateProject: updateProject,
            deleteProject: deleteProject
        }
    };

    //get the angular module
    var module = angular.module('angularappApp');
    //register the service with angular
    module.factory('ProjectService', ProjectService);
}());
(function() {
    //define the service i.e the service name
    //the service depends http and cookies service which is inbuilt in angular
    var AppAuth = function($http, $cookies) {

        var login = function (credentials) {
            return $http.post("http://userservice.staging.tangentmicroservices.com/api-token-auth/", credentials)
                .then(function (response) {
                    $cookies.put('token', response.data.token);
                }, function (message) {
                    return message
                });
        }

        var logout = function()
        {
            console.log($cookies.get('token'))
           return  $cookies.remove('token');
        }
        return {
            login: login,
            logout: logout
        }
    }

    //get the angular module
    var module = angular.module('angularappApp');
    //register the service with angular
    module.factory('AppAuth', AppAuth);
}());

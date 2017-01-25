var config_module = angular.module('angularappApp.config', [])
	.constant('APP_NAME','Angular App')
	.constant('APP_VERSION','0.1')
	.constant('APP_URL','http://localhost:9000/')
	.constant('AUTH_URL', 'http://userservice.staging.tangentmicroservices.com:80/api-token-auth/')
	.constant('PROJECT_URL', 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/')
;



'use strict';

describe('Controller: ProjectCtrl', function () {

    // load the controller's module
    beforeEach(module('angularappApp'));

    var ProjectCtrl,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        ProjectCtrl = $controller('MainCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));
     var object = {};
    it('should return an object from the API', function () {
        expect(ProjectCtrl.postProject()).toBe(object);
    });
});


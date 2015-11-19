'use strict';

describe('Controller: VendasCtrl', function () {

  // load the controller's module
  beforeEach(module('testeApp'));

  var VendasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendasCtrl = $controller('VendasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(VendasCtrl.awesomeThings.length).toBe(3);
  });
});

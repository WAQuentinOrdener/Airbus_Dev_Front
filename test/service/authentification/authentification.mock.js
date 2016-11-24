(function() {
  'use strict';

  angular
    .module('Airbus_Dev_Front.mock.service.authentification', [])
    .factory('AuthentificationService', AuthentificationService);

  function AuthentificationService() {
    return {
      some: someSpy
    };
  }

  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();

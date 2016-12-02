(function() {
  'use strict';

  angular
    .module('airbus_dev_front.mock.service.dataloader', [])
    .factory('DataLoaderService', DataLoaderService);

  function DataLoaderService() {
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

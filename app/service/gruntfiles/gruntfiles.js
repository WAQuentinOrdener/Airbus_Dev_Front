/**
 * Gruntfiles Service module.
 *
 * @module airbus_dev_front.service.gruntfiles
 */
(function () {
  'use strict';

  angular
    .module('airbus_dev_front.service.gruntfiles', [
      'ngResource'
    ])
    .factory('GruntfilesService', GruntfilesService);

  GruntfilesService.$inject = ['$resource'];

  /**
   * @class GruntfilesService
   * @constructor
   */
  function GruntfilesService($resource) {
    return $resource('/api/gruntfiles');
  }
})();

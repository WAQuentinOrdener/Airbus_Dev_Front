/**
 * Gruntfiles Service module.
 *
 * @module Airbus_Dev_Front.service.gruntfiles
 */
(function () {
  'use strict';

  angular
    .module('Airbus_Dev_Front.service.gruntfiles', [
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

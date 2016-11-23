/**
 * Authentification Service module.
 *
 * @module Airbus_Dev_Front.service.authentification
 */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.service.authentification', ['Airbus_Dev_Front.service.user'])
          .factory('AuthentificationService', AuthentificationService);

  AuthentificationService.$inject = ['UserService'];

  /**
   * AuthentificationService
   *
   * @class AuthentificationService
   * @constructor
   */
  function AuthentificationService(UserService) {
    var localDatas = UserService.getUsers();
    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var someProperty = {};

    var authentificationService = {
      someMethod: function () {
        return true;
      },
    };

    return authentificationService;
  }

})();

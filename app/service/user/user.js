/**
 * User Service module.
 *
 * @module Airbus_Dev_Front.service.user
 */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.service.user', [])
          .factory('UserService', UserService);

  UserService.$inject = ['$http'];

  /**
   * UserService
   *
   * @class UserService
   * @constructor
   */
  function UserService($http) {
    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */
    var userService = {
      getUsers: function () {
        var vm = this;
        vm.datas;
        var req = {
          method: 'GET',
          url: '/datas/users.json'
        };
        $http(req).then(function successCallback(response) {
          vm.datas = response.data;
          return vm.datas;
        }, function errorCallback(response) {
          console.log('error', response);
        });
      }
    };
    return userService;
  }

})();

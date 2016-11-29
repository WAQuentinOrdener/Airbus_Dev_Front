/**
 * Users Service module.
 *
 * @module Airbus_Dev_Front.service.users
 */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.service.users', [])
          .factory('UsersService', UsersService);

  UsersService.$inject = ['$http', '$rootScope'];

  /**
   * UsersService
   *
   * @class UsersService
   * @constructor
   */
  function UsersService($http, $rootScope) {
    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */

    var usersService = {
      loggedIn: false,
      tabFav: [],
      loginTest: function (user, pwd) {
        var req = {
          method: 'POST',
          url: 'http://localhost:9201/.csmtool/_search?pretty',
          data: {
            "query": {
              "bool": {
                "must": [
                  {"match": {"_type": "users"}},
                  {"match": {"name": user}},
                  {"match": {"pwd": pwd}}
                ]
              }
            }}
        };
        $http(req).then(function successCallback(response) {
          if (response.data.hits.hits.length > 0) {
            usersService.loggedIn = true;
            $rootScope.user = user;
          } else {
            usersService.loggedIn = false;
          }
        }, function errorCallback(response) {
          console.log('err', response);
          usersService.loggedIn = false;
        });
        return usersService.loggedIn;
      },
      getFavs: function (user) {
        var req = {
          method: 'POST',
          url: 'http://localhost:9201/.csmtool/_search?pretty',
          data: {
            "query": {
              "bool": {
                "must": [
                  {"match": {"_type": "users"}},
                  {"match": {"name": user}}
                ]
              }
            }}
        };
        $http(req).then(function successCallback(response) {
          for (var i = 0; i < response.data.hits.hits[0]._source.fav.length; i++) {
            usersService.tabFav.push(response.data.hits.hits[0]._source.fav[i]);
          }
          console.log(usersService.tabFav);
        }, function errorCallback(response) {
          console.log('err', response);
        });
        return usersService.tabFav;
      }
    };

    return usersService;
  }

})();

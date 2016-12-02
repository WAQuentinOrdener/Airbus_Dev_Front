/**
 * Users Service module.
 *
 * @module airbus_dev_front.service.users
 */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front.service.users', ['ngStorage'])
          .factory('UsersService', UsersService);

  UsersService.$inject = ['$http', '$rootScope', '$sessionStorage'];

  /**
   * UsersService
   *
   * @class UsersService
   * @constructor
   */
  function UsersService($http, $rootScope, $sessionStorage) {
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
      // Auth basic
      loginTest: function (user, pwd) {
        var req = {
          method: 'POST',
          url: 'http://' + $sessionStorage.url + '/.csmtool/_search',
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
        return $http(req).then(function successCallback(response) {
          if (response.data.hits.hits.length > 0) {
            usersService.loggedIn = true;
            $rootScope.user = user;
            $sessionStorage.user = user;
          } else {
            usersService.loggedIn = false;
          }
          return usersService.loggedIn;
        }, function errorCallback(response) {
          console.log('err', response);
          usersService.loggedIn = false;
        });
        return usersService.loggedIn;
      },
      // Retrieve tabFav for appTiles home
      getFavs: function (user) {
        var req = {
          method: 'POST',
          url: 'http://' + $sessionStorage.url + '/.csmtool/_search',
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
        return $http(req).then(function successCallback(response) {
          for (var i = 0; i < response.data.hits.hits[0]._source.fav.length; i++) {
            usersService.tabFav.push(response.data.hits.hits[0]._source.fav[i]);
          }
          return usersService.tabFav;
        }, function errorCallback(response) {
          console.log('err', response);
          // if bad URL give delete previous datas
          delete usersService.tabFav;
        });
      },
      // Update tabFav for users
      updateFavs: function (newFavs, user) {
        var req = {
          method: 'POST',
          url: 'http://' + $sessionStorage.url + '/.csmtool/users/' + user + '/_update',
          data: {
            "doc": {
              'fav': newFavs
            }
          }
        };
        $http(req).then(function successCallback(response) {
        }, function errorCallback(response) {
          console.log('err', response);
        });
      }
    };
    return usersService;
  }

})();

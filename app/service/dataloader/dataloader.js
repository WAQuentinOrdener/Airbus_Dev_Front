/**
 * DataLoader Service module.
 *
 * @module airbus_dev_front.service.dataloader
 */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front.service.dataloader', [])
          .factory('DataLoaderService', DataLoaderService);

  DataLoaderService.$inject = ['$http', '$sessionStorage'];

  /**
   * DataLoaderService
   *
   * @class DataLoaderService
   * @constructor
   */
  function DataLoaderService($http, $sessionStorage) {

    /**
     * My property description.  Like other pieces of your comment blocks,
     * this can span multiple lines.
     *
     * @property propertyName
     * @type {Object}
     * @default "foo"
     */

    var dataloaderService = {
      getAppActive: function () {
        // Request base to load active applications
        var req = {
          method: 'POST',
          url: 'http://' + $sessionStorage.url + '/.csmtool/application/_search',
          data: {
            "query": {
              "bool": {
                "must": [
                  {"match": {"active": true}}
                ]
              }
            }}
        };
        return $http(req).then(function successCallback(response) {
          dataloaderService.datas = response.data.hits.hits;
        }, function errorCallback(response) {
          console.log('err', response);
          // if bad URL give delete previous datas
          delete dataloaderService.datas;
        });
        return dataloaderService.datas;
      }
    };

    return dataloaderService;
  }

})();

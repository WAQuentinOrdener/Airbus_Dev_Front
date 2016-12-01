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

  DataLoaderService.$inject = ['$http'];

  /**
   * DataLoaderService
   *
   * @class DataLoaderService
   * @constructor
   */
  function DataLoaderService($http) {

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
          url: 'http://localhost:9201/.csmtool/application/_search',
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
        });
        return dataloaderService.datas;
      }
    };

    return dataloaderService;
  }

})();

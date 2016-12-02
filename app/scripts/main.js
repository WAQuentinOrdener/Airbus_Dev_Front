/**
 * This is airbus_dev_front module.
 *
 * @module airbus_dev_front
 */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front', [
            'ngComponentRouter',
            'airbus_dev_front.config',
            'airbus_dev_front.components.home',
            'airbus_dev_front.components.applicationTiles',
            'airbus_dev_front.components.blockInfoTile',
            'airbus_dev_front.components.monitoring',
            'airbus_dev_front.components.searchbar',
            'airbus_dev_front.components.urlModifier',
            'airbus_dev_front.components.login',
            'airbus_dev_front.components.refresh',
            'airbus_dev_front.components.kibana'
          ])
          .controller('AppController', AppController);

  AppController.$inject = ['$rootRouter'];

  /**
   * AppController
   *
   * @class AppController
   * @main airbus_dev_front
   * @constructor
   */
  function AppController($rootRouter) {
    if (!String.prototype.startsWith) {
      String.prototype.startsWith = function (searchString, position) {
        position = position || 0;
        return this.substr(position, searchString.length) === searchString;
      };
    }
    $rootRouter.config([
      {
        path: '/home',
        name: 'Home',
        component: 'home',
        useAsDefault: true
      },
      {
        path: '/monitoring',
        name: 'Monitoring',
        component: 'monitoring'
      },
      {
        path: '/graph',
        name: 'Kibana',
        component: 'kibana'
      }
    ]);
  }
})();

/**
 * This is Airbus_Dev_Front module.
 *
 * @module Airbus_Dev_Front
 */
(function () {
  'use strict';

  angular
    .module('Airbus_Dev_Front', [
      'ngComponentRouter',
      'Airbus_Dev_Front.config',
      'Airbus_Dev_Front.components.home',
      'Airbus_Dev_Front.components.applicationTiles',
      'Airbus_Dev_Front.components.monitoring',
      'Airbus_Dev_Front.components.kibana'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$rootRouter', '$http'];

  /**
   * AppController
   *
   * @class AppController
   * @main Airbus_Dev_Front
   * @constructor
   */
  function AppController ($rootRouter) {
    $rootRouter.config([
      {
        path: '/home',
        name:'Home',
        component: 'home',
        useAsDefault: true
      },
      {
        path: '/monitoring',
        name:'Monitoring',
        component: 'monitoring'
      },
      {
        path: '/graph',
        name:'Kibana',
        component: 'kibana'
      }
    ]);
  }
})();

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
      'Airbus_Dev_Front.components.about',
      'Airbus_Dev_Front.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$inject = ['$rootRouter'];

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
        path: '/about',
        name:'About',
        component: 'about'
      },
      {
        path: '/contact',
        name:'Contact',
        component: 'contact'
      }
    ]);
  }
})();

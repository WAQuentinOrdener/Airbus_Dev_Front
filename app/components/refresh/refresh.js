/**
 * Refresh Components module.
 *
 * @module Airbus_Dev_Front.components.refresh
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.refresh', ['ngRoute'])
          .component('refresh', {
            controller: Controller,
            controllerAs: 'refresh',
            templateUrl: 'components/refresh/refresh.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$interval', '$route', '$routeParams'];

  function Controller($interval, $route) {
    var ctrl = this;
    // Set up reload to false at init page
    ctrl.isActive = false;
    ctrl.activeRefresh = function (val) {
      switch (val) {
        case 30:
          ctrl.intervalReloadVal = 1000;
          console.log('30sec');
          $route.go('/');
          break;
        case 1:
          ctrl.intervalReloadVal = 2000;
          console.log('1min');
          break;
        case 2:
          ctrl.intervalReloadVal = 3000;
          console.log('2min');
          break;
        case 0:
          ctrl.intervalReloadVal = false;
          console.log('No refresh');
          break;
        default:
          break;
      }
      if (ctrl.intervalReloadVal !== false) {
      }
    };
    ctrl.name = 'refresh ';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

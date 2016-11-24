/**
 * Refresh Components module.
 *
 * @module Airbus_Dev_Front.components.refresh
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.refresh', [])
          .component('refresh', {
            controller: Controller,
            controllerAs: 'refresh',
            templateUrl: 'components/refresh/refresh.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$interval', '$rootScope'];

  function Controller($interval, $rootRouter, $rootScope, $timeout) {
    var ctrl = this;
    // Set up reload to false at init page
    ctrl.isActive = false;
    ctrl.activeRefresh = function (val) {
      switch (val) {
        case 30:
          ctrl.intervalReloadVal = 1000;
          $rootScope.refresh = true;
          setTimeout(function() { $rootScope.refresh = false; $rootScope.$digest();}, 100);
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
    };
      if (ctrl.intervalReloadVal) {
      }
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

/**
 * Refresh Components module.
 *
 * @module airbus_dev_front.components.refresh
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front.components.refresh', [])
          .component('refresh', {
            controller: Controller,
            controllerAs: 'refresh',
            templateUrl: 'components/refresh/refresh.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$rootScope', '$interval', '$timeout'];

  function Controller($rootScope, $interval, $timeout) {
    var ctrl = this;
    // Set up reload to false at init page
    ctrl.isActive = false;
    $rootScope.refresh = false;
    ctrl.setReload = function () {
      if (ctrl.intervalReloadVal) {
        ctrl.isActive = true;
        ctrl.reloading = $interval(function () {
          $rootScope.refresh = true;
          $timeout(function () {
            $rootScope.refresh = false;
          }, 700);
        }, ctrl.intervalReloadVal);
      } else {
        $rootScope.refresh = false;
        ctrl.isActive = false;
        $interval.cancel(ctrl.reloading);
      }
    };
    ctrl.activeRefresh = function (val) {
      switch (val) {
        case 0:
          ctrl.intervalReloadVal = 15000;
          ctrl.setReload();
          break;
        case 1:
          ctrl.intervalReloadVal = 30000;
          ctrl.setReload();
          break;
        case 2:
          ctrl.intervalReloadVal = 60000;
          ctrl.setReload();
          break;
        case 3:
          ctrl.intervalReloadVal = false;
          ctrl.setReload();
          break;
        default:
          break;
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

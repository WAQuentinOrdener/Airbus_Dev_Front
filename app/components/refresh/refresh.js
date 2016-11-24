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

  Controller.$inject = ['$rootScope'];

  function Controller($rootScope) {
    var ctrl = this;
    // Set up reload to false at init page
    ctrl.isActive = false;
    $rootScope.refresh = false;
    ctrl.setReload = function () {
      if (ctrl.intervalReloadVal) {
        ctrl.isActive = true;
        ctrl.reloading = setInterval(function () {
          $rootScope.refresh = true;
          $rootScope.$digest();
          setTimeout(function () {
            $rootScope.refresh = false;
            $rootScope.$digest();
          }, 800);
        }, ctrl.intervalReloadVal);
      } else {
        $rootScope.refresh = false;
        ctrl.isActive = false;
        clearInterval(ctrl.reloading);
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

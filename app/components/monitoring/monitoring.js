/**
 * Monitoring Components module.
 *
 * @module Airbus_Dev_Front.components.monitoring
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.monitoring', ['ngComponentRouter'])
          .component('monitoring', {
            controller: Controller,
            templateUrl: 'components/monitoring/monitoring.html',
            $canActivate: $canActivate
          });

  Controller.$inject = [];

  function Controller() {
    var ctrl = this;
    ctrl.$routerOnActivate = function (next, previous) {
      return ctrl.appCode = next.params.appCode;
    };
    ctrl.tabResults = [];
    for (var i = 0; i <= 10; i++) {
      ctrl.tabResults[i] = {
        sondeNum: i,
        isAlive: true,
        inUseSince: '10/11'
      };
    }
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

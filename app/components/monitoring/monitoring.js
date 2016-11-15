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

  Controller.$inject = ['$route'];

  function Controller($route) {
    var ctrl = this;
    ctrl.tabResults = [];
    ctrl.appName = 'A380';
    for(var i = 0; i <= 10 ; i++ ){
      ctrl.tabResults[i] = {
        sondeNum: i,
        isAlive: true,
        inUseSince: '10/11'
      };
    }
//    console.log($route);
    ctrl.name = 'monitoring ';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function() {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

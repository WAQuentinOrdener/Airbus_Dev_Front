/**
 * Kibana Components module.
 *
 * @module Airbus_Dev_Front.components.kibana
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.kibana', [])
          .component('kibana', {
            controller: Controller,
            templateUrl: 'components/kibana/kibana.html',
            $canActivate: $canActivate
          });

  Controller.$inject = [];

  function Controller() {
    var ctrl = this;
    ctrl.$routerOnActivate = function (next) {
      ctrl.appCode = next.params.appCode;
      ctrl.errName = next.params.errName;
      ctrl.url = 'Oops there was an error';
      if (typeof ctrl.appCode !== 'undefined' && typeof ctrl.errName !== 'undefined') {
        ctrl.url = ctrl.appCode + ' ' + ctrl.errName;
      }
    };
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
  };
})();

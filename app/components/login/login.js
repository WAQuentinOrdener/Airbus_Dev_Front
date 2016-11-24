/**
 * Login Components module.
 *
 * @module Airbus_Dev_Front.components.login
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.login', [
            'Airbus_Dev_Front.service.authentification'
          ])
          .component('login', {
            controller: Controller,
            templateUrl: 'components/login/login.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['AuthentificationService'];

  function Controller(AuthentificationService) {
    var ctrl = this;
    ctrl.name = 'login ';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

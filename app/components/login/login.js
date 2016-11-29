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
            'Airbus_Dev_Front.service.users'
          ])
          .component('login', {
            controller: Controller,
            controllerAs: "login",
            templateUrl: 'components/login/login.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['UsersService', '$timeout'];

  function Controller(UsersService, $timeout) {
    var ctrl = this;
    ctrl.name = 'login ';
    ctrl.checkUser = function (user, pwd) {
      UsersService.loginTest(user, pwd);
      ctrl.isLogged = UsersService;
      ctrl.isVisible = true;
      $timeout(function () {
        ctrl.isVisible = false;
        $('#loginModal').modal('hide');
      }, 1500);
    };
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

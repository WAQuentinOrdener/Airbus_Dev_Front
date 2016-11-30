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
            'Airbus_Dev_Front.service.users',
            'ngStorage'
          ])
          .component('login', {
            controller: Controller,
            controllerAs: "login",
            templateUrl: 'components/login/login.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['UsersService', '$timeout', '$sessionStorage', '$rootScope'];

  function Controller(UsersService, $timeout, $sessionStorage, $rootScope) {
    var ctrl = this;
    ctrl.name = 'login ';
    ctrl.checkUser = function (user, pwd) {
      UsersService.loginTest(user, pwd).then(function () {
        ctrl.isVisible = true;
        if (UsersService.loggedIn) {
          ctrl.wrongUsername = false;
          $timeout(function () {
            ctrl.isVisible = false;
            $('#loginModal').modal('hide');
          }, 700);
        } else {
          ctrl.wrongUsername = true;
          $timeout(function () {
            ctrl.isVisible = false;
          }, 700);
        }
      });
    };
    ctrl.logout = function () {
      delete $sessionStorage.user;
      delete $rootScope.user;
      $rootScope.refresh = true;
      $timeout(function () {
        $rootScope.refresh = false;
        $('#logoutModal').modal('hide');
      }, 700);
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

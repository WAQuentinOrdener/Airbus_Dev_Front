/**
 * Home Components module.
 *
 * @module Airbus_Dev_Front.components.home
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.home', ['ngStorage'])
          .component('home', {
            controller: Controller,
            controllerAs: 'home',
            templateUrl: 'components/home/home.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$http', '$sessionStorage', '$rootScope'];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($http, $sessionStorage, $rootScope) {
    var ctrl = this;
    if ($sessionStorage.user) {
      $rootScope.user = $sessionStorage.user;
    }
    ctrl.filter = '';
    // Changing filter with searchBar
    ctrl.updateList = function (newFilter) {
      ctrl.filter = newFilter;
    };
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };

  Controller.prototype.$routerOnActivate = function () {
  };

  Controller.prototype.$routerCanReuse = function () {
    return true;
  };

  Controller.prototype.$routerOnReuse = function () {
  };

  Controller.prototype.$routerCanDeactivate = function () {
    return true;
  };

  Controller.prototype.$routerOnDeactivate = function () {
  };
})();

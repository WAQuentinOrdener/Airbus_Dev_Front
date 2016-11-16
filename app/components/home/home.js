/**
 * Home Components module.
 *
 * @module Airbus_Dev_Front.components.home
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('Airbus_Dev_Front.components.home', [])
    .component('home', {
      controller: Controller,
      templateUrl: 'components/home/home.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller() {
    var ctrl = this;
    ctrl.name = 'Home';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function() {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };

  Controller.prototype.$routerOnActivate = function() {
  };

  Controller.prototype.$routerCanReuse = function () {
    return true;
  };

  Controller.prototype.$routerOnReuse = function() {
  };

  Controller.prototype.$routerCanDeactivate = function () {
    return true;
  };

  Controller.prototype.$routerOnDeactivate = function() {
  };
})();

/**
 * Home Components module.
 *
 * @module airbus_dev_front.components.home
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front.components.home', ['ngStorage'])
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
    // Setting base Url in order to have portable fetch datas applications
    $sessionStorage.url = "localhost:9201";
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

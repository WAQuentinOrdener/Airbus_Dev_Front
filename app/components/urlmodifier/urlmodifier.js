/**
 * UrlModifier Components module.
 *
 * @module airbus_dev_front.components.urlModifier
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('airbus_dev_front.components.urlModifier', [])
    .component('urlModifier', {
      controller: Controller,
      controllerAs: "url",
      templateUrl: 'components/urlmodifier/urlmodifier.html',
      $canActivate: $canActivate
    });

  Controller.$inject = ['$sessionStorage', '$timeout', '$rootScope'];

  function Controller($sessionStorage, $timeout, $rootScope) {
    var ctrl = this;
    ctrl.url = $sessionStorage.url;
    ctrl.changeUrl = function (newUrl) {
      $sessionStorage.url = newUrl;
      // force refresh to reload data
      $rootScope.refresh = true;
      $timeout(function () {
        $rootScope.refresh = false;
      }, 700);
    };
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function() {
    var ctrl = this;
  };
})();

/**
 * Kibana Components module.
 *
 * @module airbus_dev_front.components.kibana
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front.components.kibana', [])
          .component('kibana', {
            controller: Controller,
            templateUrl: 'components/kibana/kibana.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$sce'];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($sce) {
    var ctrl = this;
    ctrl.trustSrc = function (url) {
      return $sce.trustAsResourceUrl(url);
    };
    ctrl.$routerOnActivate = function (next) {
      ctrl.appCode = next.params.appCode;
      ctrl.url = 'Oops there was an error';
      if (typeof ctrl.appCode !== 'undefined') {
        ctrl.url = "https://fr0-vsiaas-3215.eu-v.airbus-v.corp/1V73/graph/graph.html?xcode=" + ctrl.appCode + "_FRA";
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

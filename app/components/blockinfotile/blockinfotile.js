/**
 * BlockInfoTile Components module.
 *
 * @module airbus_dev_front.components.blockInfoTile
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('airbus_dev_front.components.blockInfoTile', [])
    .component('blockInfoTile', {
      controller: Controller,
      controllerAs: "bit",
      templateUrl: 'components/blockinfotile/blockinfotile.html',
      bindings: {
        reportName: '<'
      },
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  function Controller() {
    var ctrl = this;
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function() {
  };
})();

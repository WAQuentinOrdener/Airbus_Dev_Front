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
      templateUrl: 'components/blockinfotile/blockinfotile.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  function Controller() {
    console.log('blockInfoTile  Controller Constructor');
    var ctrl = this;
    ctrl.name = 'blockInfoTile ';
  }

  function $canActivate() {
    console.log('blockInfoTile  Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    var ctrl = this;
    console.log('blockInfoTile  Controller $onInit');
    ctrl.onInit = 'Success';
  };
})();

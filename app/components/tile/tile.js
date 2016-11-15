/**
 * Tile Components module.
 *
 * @module Airbus_Dev_Front.components.tile
 */
/* global angular */
(function () {
  'use strict';

  angular
    .module('Airbus_Dev_Front.components.tile', [])
    .component('tile', {
      controller: Controller,
      templateUrl: 'components/tile/tile.html',
      $canActivate: $canActivate
    });

  Controller.$inject = [];

  function Controller() {
    console.log('tile  Controller Constructor');
    var ctrl = this;
    ctrl.name = 'tile ';
  }

  function $canActivate() {
    console.log('tile  Controller $canActivate');
    return true;
  }

  Controller.prototype.$onInit = function() {
    var ctrl = this;
    console.log('tile  Controller $onInit');
    ctrl.onInit = 'Success';
  };
})();

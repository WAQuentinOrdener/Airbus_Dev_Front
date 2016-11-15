/**
 * ApplicationTiles Components module.
 *
 * @module Airbus_Dev_Front.components.applicationTiles
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.applicationTiles', [])
          .component('applicationTiles', {
            controller: Controller,
            templateUrl: 'components/applicationtiles/applicationtiles.html',
            $canActivate: $canActivate
          });

  Controller.$inject = [];

  function Controller() {
    var ctrl = this;
    ctrl.results = [];
    ctrl.resultat0 = {
      nameApp: 'A380',
      date: '10/11',
      errInfra: 20,
      errSem: 30,
      errAvailability: 0
    };
    ctrl.resultat1 = {
      nameApp: 'A320',
      err: true,
      date: '10/11',
      errInfra: 15,
      errSem: 0,
      errAvailability: 10
    };
    ctrl.resultat2 = {
      nameApp: 'App1',
      err: false,
      date: '10/11',
      errInfra: 30,
      errSem: 20,
      errAvailability: 5
    };
    ctrl.resultat3 = {
      nameApp: 'App2',
      err: true,
      alert: true,
      date: '10/11',
      errInfra: 5,
      errSem: 25,
      errAvailability: 30
    };
    ctrl.results[0] = ctrl.resultat0;
    ctrl.results[1] = ctrl.resultat1;
    ctrl.results[2] = ctrl.resultat2;
    ctrl.results[3] = ctrl.resultat3;
    ctrl.name = 'applicationTiles';
    ctrl.goToMonitoring = function (app) {
      console.log(app.nameApp);
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

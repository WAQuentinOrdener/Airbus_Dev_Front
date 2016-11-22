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
            controllerAs: 'appTiles',
            templateUrl: 'components/applicationtiles/applicationtiles.html',
            bindings: {
              filter: '<',
              onFilterChange: '&'
            },
            $canActivate: $canActivate
          });

  Controller.$inject = ['$scope'];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller() {
    var ctrl = this;
    console.log(ctrl.filter);
    ctrl.json = [{
        'codeApp': 'A420',
        'nameApp': 'CDIS',
        'errInfra': 20,
        'errSem': 30,
        'errAvailability': 0
      },
      {
        'codeApp': 'F760',
        'nameApp': 'DDM',
        'errInfra': 15,
        'errSem': 0,
        'errAvailability': 10
      },
      {
        'codeApp': 'A282',
        'nameApp': 'TDD',
        'errInfra': 30,
        'errSem': 20,
        'errAvailability': 5
      },
      {
        'codeApp': '1Q09',
        'nameApp': 'ACKS',
        'errInfra': 5,
        'errSem': 25,
        'errAvailability': 30
      },
      {
        'codeApp': 'T000',
        'nameApp': 'Spares Portal',
        'errInfra': 0,
        'errSem': 0,
        'errAvailability': 0
      },
      {
        'codeApp': '1T40',
        'nameApp': 'ADNS',
        'errInfra': 30,
        'errSem': 30,
        'errAvailability': 30
      }];
    ctrl.animeDashboard = function (index) {
      var x = document.getElementsByClassName('fa-dashboard');
      x[index].style.animation = 'bounceIn 0.5s';
    };
    ctrl.animeGraph = function (index) {
      var x = document.getElementsByClassName('fa-bar-chart');
      x[index].style.animation = 'bounceIn 0.5s';
    };
    ctrl.removeDashAnime = function (index) {
      var x = document.getElementsByClassName('fa-dashboard');
      x[index].style.animation = 'none';
    };
    ctrl.removeGraphAnime = function (index) {
      var x = document.getElementsByClassName('fa-bar-chart');
      x[index].style.animation = 'none';
    };
    ctrl.name = 'applicationTiles';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

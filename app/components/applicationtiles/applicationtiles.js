/**
 * ApplicationTiles Components module.
 *
 * @module Airbus_Dev_Front.components.applicationTiles
 */
/* global angular */
(function () {

  angular
          .module('Airbus_Dev_Front.components.applicationTiles', [
            'Airbus_Dev_Front.service.users'])
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

  Controller.$inject = ['$http', '$rootScope', 'UsersService', '$timeout'];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($http, $rootScope, UsersService, $timeout) {
    var ctrl = this;
    // Request base to load active applications
    ctrl.req = {
      method: 'POST',
      url: 'http://localhost:9201/.csmtool/_search?pretty',
      data: {
        "query": {
          "bool": {
            "must": [
              {"match": {"_type": "application"}},
              {"match": {"active": true}}
            ]
          }
        }}
    };
    $http(ctrl.req).then(function successCallback(response) {
      ctrl.appsActive = response.data.hits.hits;
    }, function errorCallback(response) {
      console.log('err', response);
    });
    // User is connected change filter to display only fav AND applications actives
    $rootScope.$watch("user", function () {
      if (typeof $rootScope.user !== 'undefined') {
        UsersService.getFavs($rootScope.user).then(function () {
          for (var i = 0; i < ctrl.appsActive.length; i++) {
            for (var j = 0; j < UsersService.tabFav.length; j++) {
              if (ctrl.appsActive[i]._source.code === UsersService.tabFav[j]) {
                ctrl.appsActive[i].isFav = true;
              }
            }
          }
        });
      }
    });
    // Trigger animation onhover once
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

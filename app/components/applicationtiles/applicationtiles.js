/**
 * ApplicationTiles Components module.
 *
 * @module airbus_dev_front.components.applicationTiles
 */
/* global angular */
(function () {

  angular
          .module('airbus_dev_front.components.applicationTiles', [
            'airbus_dev_front.service.users',
            'airbus_dev_front.service.dataloader'
          ])
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

  Controller.$inject = ['$http', '$rootScope', 'UsersService', 'DataLoaderService'];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($http, $rootScope, UsersService, DataLoaderService) {
    var ctrl = this;
    // load data before charging in DOM
    DataLoaderService.getAppActive().then(function () {
      ctrl.appsActive = DataLoaderService.datas;
    });
    // User is connected change filter to display only fav AND applications actives
    $rootScope.$watch("user", function () {
      ctrl.tabFavTmp = [];
      if (typeof $rootScope.user !== 'undefined') {
        UsersService.getFavs($rootScope.user).then(function () {
          for (var i = 0; i < ctrl.appsActive.length; i++) {
            for (var j = 0; j < UsersService.tabFav.length; j++) {
              if (ctrl.appsActive[i]._source.code === UsersService.tabFav[j]) {
                ctrl.tabFavTmp.push(UsersService.tabFav[j]);
                ctrl.appsActive[i].isFav = true;
              }
            }
          }
        });
      }
    });
    // Add/Delete Fav app from tabFav tmp
    ctrl.addDelFav = function (appCode) {
      ctrl.favToDel = false;
      // Test if present in tmp tab fav :
      // if in del fav
      for (var i = 0; i < ctrl.tabFavTmp.length; i++) {
        if (appCode === ctrl.tabFavTmp[i]) {
          ctrl.favToDel = true;
          ctrl.tabFavTmp.splice(i, 1);
          for (var j = 0; j < ctrl.appsActive.length; j++) {
            if (appCode === ctrl.appsActive[j]._source.code) {
              ctrl.appsActive[j].isFav = false;
            }
          }
        }
      }
      // if not in add fav
      if (!ctrl.favToDel) {
        ctrl.tabFavTmp.push(appCode);
        for (var k = 0; k < ctrl.appsActive.length; k++) {
          if (appCode === ctrl.appsActive[k]._source.code) {
            ctrl.appsActive[k].isFav = true;
          }
        }
      }
      // Finally update data user fav with new value
      UsersService.updateFavs(ctrl.tabFavTmp, $rootScope.user);
    };
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
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
  };
})();

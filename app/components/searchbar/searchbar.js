/**
 * Searchbar Components module.
 *
 * @module Airbus_Dev_Front.components.searchbar
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.searchbar', [])
          .component('searchbar', {
            controller: Controller,
            controllerAs: 'searchBar',
            templateUrl: 'components/searchbar/searchbar.html',
            bindings: {
              datas: '<',
              filter: '<',
              onChange: '&'
            },
            $canActivate: $canActivate
          });

  Controller.$inject = [];

  function Controller() {
    var ctrl = this;
    // Initiate values
    ctrl.searching = '';
    ctrl.doSearch = false;
    // Json to test filter in tabResults applicationTiles
    ctrl.json = [{
        'codeApp': 'A420',
        'nameApp': 'CDIS'
      },
      {
        'codeApp': 'F760',
        'nameApp': 'DDM'
      },
      {
        'codeApp': 'A282',
        'nameApp': 'TDD'
      },
      {
        'codeApp': '1Q09',
        'nameApp': 'ACKS'
      },
      {
        'codeApp': 'T000',
        'nameApp': 'Spares Portal'
      },
      {
        'codeApp': '1T40',
        'nameApp': 'ADNS'
      }];
    //ctrl.tabResults = ctrl.datas.aggregations.process_ids.buckets;
    ctrl.tabResults = ctrl.json;
    // Set selection as default text + set value to searchDone hiding results
    ctrl.selectResult = function (item) {
      var index = ctrl.tabResults.indexOf(item);
      ctrl.searching = ctrl.tabResults[index].codeApp;
      ctrl.filter = ctrl.searching;
      ctrl.onChange({newFilter: ctrl.filter});
      document.getElementById('search-input').focus();
    };

    // Set focus on results li
    ctrl.focusResults = function ($event) {
      if ($event.keyCode === 40) {
        var x = document.getElementsByClassName('results-elem');
        x[0].focus();
      }
      // When press enter with no result to reinit
      if ($event.keyCode === 13) {
        ctrl.filter = ctrl.searching;
        ctrl.onChange({newFilter: ctrl.filter});
      }
    };
    // keyup/keydown + enter navigation
    ctrl.navigateResults = function ($event, result) {
      switch ($event.keyCode) {
        case 38:
          if (document.activeElement.previousElementSibling !== null) {
            document.activeElement.previousElementSibling.focus();
            $event.preventDefault();
          }
          break;
        case 40:
          if (document.activeElement.nextElementSibling !== null) {
            document.activeElement.nextElementSibling.focus();
            $event.preventDefault();
          }
          break;
        case 13:
          ctrl.selectResult(result);
          break;
        default:
          break;
      }
    };
    ctrl.reinit = function () {
      ctrl.doSearch = false;
      ctrl.searching = '';
      ctrl.filter = '';
      ctrl.onChange({newFilter: ctrl.filter});
    };
    ctrl.name = 'searchbar ';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

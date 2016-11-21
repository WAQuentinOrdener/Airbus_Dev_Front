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
            templateUrl: 'components/searchbar/searchbar.html',
            bindings: {
              datas: '<',
              research: '<',
              onUpdate: '&'
            },
            $canActivate: $canActivate
          });

  Controller.$inject = [];

  function Controller() {
    var ctrl = this;
    console.log(ctrl);
    // Initiate values
    ctrl.doSearch = false;
    ctrl.tabResults = ctrl.datas.aggregations.process_ids.buckets;
    // Set selection as default text + set value to searchDone hiding results
    ctrl.selectResult = function (item) {
      var index = ctrl.tabResults.indexOf(item);
      ctrl.searching = ctrl.tabResults[index].key;
      ctrl.doSearch = false;
    };
    // Set focus on results li
    ctrl.focusResults = function ($event) {
      if ($event.keyCode === 40) {
        var x = document.getElementsByClassName('results-elem');
        x[0].focus();
      }
    };
    // keyup/keydown navigation
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
    ctrl.focus = function () {
      if (ctrl.inResultsTab) {
        // Search not done show results
        ctrl.doSearch = true;
      } else {
        ctrl.doSearch = false;
      }
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

/**
 * Searchbar Components module.
 *
 * @module airbus_dev_front.components.searchbar
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('airbus_dev_front.components.searchbar', [])
          .component('searchbar', {
            controller: Controller,
            controllerAs: 'searchBar',
            templateUrl: 'components/searchbar/searchbar.html',
            bindings: {
              filter: '<',
              onChange: '&'
            },
            $canActivate: $canActivate
          });

  Controller.$inject = ['$http', '$timeout'];

  function Controller($http, $timeout) {
    var ctrl = this;
    // Initiate values
    ctrl.searching = '';
    ctrl.doSearch = false;
    ctrl.inResultsTab = false;
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
    // Set selection as default text + set value to searchDone hiding results
    ctrl.selectResult = function (item) {
      var index = ctrl.appsActive.indexOf(item);
      ctrl.searching = ctrl.appsActive[index]._source.code;
      ctrl.filter = ctrl.searching;
      ctrl.inResultsTab = false;
      ctrl.onChange({newFilter: ctrl.filter});
      document.getElementById('search-input').focus();
    };

    // Set focus on results li
    ctrl.focusResults = function ($event) {
      if ($event.keyCode === 40) {
        var x = document.getElementsByClassName('results-elem');
        ctrl.inResultsTab = true;
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
    ctrl.unsetFocus = function () {
      $timeout(function () {
        if (!ctrl.inResultsTab) {
          ctrl.doSearch = false;
        }
      }, 1500);
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

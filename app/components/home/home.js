/**
 * Home Components module.
 *
 * @module Airbus_Dev_Front.components.home
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.home', [])
          .component('home', {
            controller: Controller,
            templateUrl: 'components/home/home.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$http'];

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($http) {
    var ctrl = this;
    ctrl.searchAppCode = "";
    ctrl.updateList = function (newAppCode) {
      console.log(newAppCode);
      //ctrl.searchAppCode = newAppCode;
    };
    var req = {
      method: 'POST',
      url: 'http://localhost:9201/logstash*/_search?pretty',
      headers: {
        'Content-Type': "application/json;charset=utf-8"
      },
      data: {
        "size": 0,
        "query": {
          "bool": {
            "must": [
              {"match": {"Application.raw": "CDIS"}}
            ],
            "must_not": {
              "exists": {
                "field": "Process Start"
              }
            }
          }
        },
        "aggs": {
          "process_ids": {
            "terms": {
              "size": 1000,
              "field": "User.raw"
            }
          }
        }
      }
    };
    $http(req).then(function successCallback(response) {
      ctrl.datas = response.data;
    }, function errorCallback(response) {
      console.log('error', response);
    });

    ctrl.name = 'Home';
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };

  Controller.prototype.$routerOnActivate = function () {
  };

  Controller.prototype.$routerCanReuse = function () {
    return true;
  };

  Controller.prototype.$routerOnReuse = function () {
  };

  Controller.prototype.$routerCanDeactivate = function () {
    return true;
  };

  Controller.prototype.$routerOnDeactivate = function () {
  };
})();

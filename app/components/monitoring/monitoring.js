/**
 * Monitoring Components module.
 *
 * @module Airbus_Dev_Front.components.monitoring
 */
/* global angular */
(function () {
  'use strict';

  angular
          .module('Airbus_Dev_Front.components.monitoring', ['ngComponentRouter'])
          .component('monitoring', {
            controller: Controller,
            templateUrl: 'components/monitoring/monitoring.html',
            $canActivate: $canActivate
          });

  Controller.$inject = ['$sce'];

  function Controller($sce) {
    var ctrl = this;
    ctrl.trustSrc = function(url) {
      return $sce.trustAsResourceUrl(url);
    };
    ctrl.url = 'http://localhost:5601/app/kibana#/visualize/edit/module?embed=true&_g=(refreshInterval:(display:Off,pause:!f,value:0)\n\
,time:(from:now%2Fy,mode:quick,to:now))&_a=(filters:!((\'$state\':(store:appState)\n\
,meta:(alias:!n,disabled:!f,index:\'logstash-*\',key:Module.raw,negate:!t,value:CDIS)\n\
,query:(match:(Module.raw:(query:CDIS,type:phrase)))))\n\
,linked:!f,query:(query_string:(analyze_wildcard:!t,query:\'*\')),uiState:()\n\
,vis:(aggs:!((id:\'1\',params:(),schema:metric,type:count),(id:\'2\',params:(field:Module.raw,order:desc,orderBy:\'1\',size:50)\n\
,schema:segment,type:terms)),listeners:(),params:(addLegend:!t,addTooltip:!t,isDonut:!f,shareYAxis:!t),title:module,type:pie))';
    ctrl.$routerOnActivate = function (next) {
      ctrl.appCode = next.params.appCode;
    };
    ctrl.tabResults = [];
    for (var i = 0; i <= 10; i++) {
      ctrl.tabResults[i] = {
        sondeNum: i,
        isAlive: true,
        inUseSince: '10/11'
      };
    }
  }

  function $canActivate() {
    return true;
  }

  Controller.prototype.$onInit = function () {
    var ctrl = this;
    ctrl.onInit = 'Success';
  };
})();

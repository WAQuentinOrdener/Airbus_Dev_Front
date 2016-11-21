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

  /**
   * Controller
   *
   * @class Controller
   * @constructor
   */
  function Controller($sce) {
    var ctrl = this;
    ctrl.trustSrc = function (url) {
      return $sce.trustAsResourceUrl(url);
    };
    ctrl.jsonUrl = {
      'A420' : "http://csm-v.eu-v.airbus-v.corp/app/kibana#/dashboard/CDIS-Monitoring?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-60d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!t),panels:!((col:3,id:CDIS-Graph,panelIndex:6,row:1,size_x:8,size_y:4,type:visualization),(col:11,id:CDIS-critical-incident,panelIndex:8,row:1,size_x:2,size_y:2,type:visualization),(col:11,id:CDIS-incidents-BMC,panelIndex:9,row:3,size_x:2,size_y:2,type:visualization),(col:1,id:BSM-Performance,panelIndex:14,row:8,size_x:12,size_y:2,type:visualization),(col:1,id:CDIS-BSM-Availability,panelIndex:16,row:5,size_x:12,size_y:3,type:visualization),(col:1,columns:!(incident_number,status,srid,assigned_group,application.environment,description,last_modified_date),id:Incident-listing,panelIndex:17,row:10,size_x:12,size_y:2,sort:!('@timestamp',desc),type:search),(col:1,id:Main-Markdown,panelIndex:18,row:1,size_x:2,size_y:4,type:visualization),(col:1,id:CDIS-modules-availability,panelIndex:19,row:12,size_x:3,size_y:5,type:visualization),(col:4,id:Outage-Timeline,panelIndex:20,row:12,size_x:9,size_y:3,type:visualization),(col:4,id:'Outage-slash-probe-slash-month-(max-duration-by-transaction)',panelIndex:21,row:15,size_x:9,size_y:6,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'App.Code:A420%20or%20application.code:A420')),title:'CDIS%20Monitoring',uiState:(P-14:(vis:(legendOpen:!f))))",
      'F760' : "http://csm-v.eu-v.airbus-v.corp/app/kibana#/dashboard/Monitoring-dashboard?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-60d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!t),panels:!((col:1,columns:!(incident_number,status,srid,assigned_group,application.environment,description,last_modified_date),id:Incident-listing,panelIndex:1,row:8,size_x:12,size_y:3,sort:!('@timestamp',desc),type:search),(col:3,id:BSM-Availability,panelIndex:2,row:1,size_x:10,size_y:2,type:visualization),(col:3,id:BSM-Performance,panelIndex:3,row:3,size_x:10,size_y:2,type:visualization),(col:1,id:Critical-incident,panelIndex:4,row:3,size_x:2,size_y:2,type:visualization),(col:1,id:Incidents-BMC,panelIndex:5,row:5,size_x:2,size_y:2,type:visualization),(col:1,id:Main-Markdown,panelIndex:6,row:1,size_x:2,size_y:2,type:visualization),(col:3,id:Outage-Timeline,panelIndex:7,row:5,size_x:10,size_y:3,type:visualization),(col:1,id:'Outage-slash-probe-slash-month-(max-duration-by-transaction)',panelIndex:8,row:11,size_x:6,size_y:6,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'App.Code:F760%20OR%20application.code:F760')),title:'Monitoring%20dashboard',uiState:(P-2:(vis:(legendOpen:!f)),P-3:(vis:(legendOpen:!f)),P-8:(spy:(mode:(fill:!f,name:!n)))))",
      'A282' : "http://csm-v.eu-v.airbus-v.corp/app/kibana#/dashboard/Monitoring-dashboard?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-60d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!t),panels:!((col:1,columns:!(incident_number,status,srid,assigned_group,application.environment,description,last_modified_date),id:Incident-listing,panelIndex:1,row:8,size_x:12,size_y:3,sort:!('@timestamp',desc),type:search),(col:3,id:BSM-Availability,panelIndex:2,row:1,size_x:10,size_y:2,type:visualization),(col:3,id:BSM-Performance,panelIndex:3,row:3,size_x:10,size_y:2,type:visualization),(col:1,id:Critical-incident,panelIndex:4,row:3,size_x:2,size_y:2,type:visualization),(col:1,id:Incidents-BMC,panelIndex:5,row:5,size_x:2,size_y:2,type:visualization),(col:1,id:Main-Markdown,panelIndex:6,row:1,size_x:2,size_y:2,type:visualization),(col:3,id:Outage-Timeline,panelIndex:7,row:5,size_x:10,size_y:3,type:visualization),(col:1,id:'Outage-slash-probe-slash-month-(max-duration-by-transaction)',panelIndex:8,row:11,size_x:6,size_y:6,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'App.Code:A282%20OR%20application.code:A282')),title:'Monitoring%20dashboard',uiState:(P-2:(vis:(legendOpen:!f)),P-3:(vis:(legendOpen:!f)),P-8:(spy:(mode:(fill:!f,name:!n)))))",
      '1Q09' : "http://csm-v.eu-v.airbus-v.corp/app/kibana#/dashboard/Monitoring-dashboard?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-60d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!t),panels:!((col:1,columns:!(incident_number,status,srid,assigned_group,application.environment,description,last_modified_date),id:Incident-listing,panelIndex:1,row:8,size_x:12,size_y:3,sort:!('@timestamp',desc),type:search),(col:3,id:BSM-Availability,panelIndex:2,row:1,size_x:10,size_y:2,type:visualization),(col:3,id:BSM-Performance,panelIndex:3,row:3,size_x:10,size_y:2,type:visualization),(col:1,id:Critical-incident,panelIndex:4,row:3,size_x:2,size_y:2,type:visualization),(col:1,id:Incidents-BMC,panelIndex:5,row:5,size_x:2,size_y:2,type:visualization),(col:1,id:Main-Markdown,panelIndex:6,row:1,size_x:2,size_y:2,type:visualization),(col:3,id:Outage-Timeline,panelIndex:7,row:5,size_x:10,size_y:3,type:visualization),(col:1,id:'Outage-slash-probe-slash-month-(max-duration-by-transaction)',panelIndex:8,row:11,size_x:6,size_y:6,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'App.Code:1Q09%20OR%20application.code:1Q09')),title:'Monitoring%20dashboard',uiState:(P-2:(vis:(legendOpen:!f)),P-3:(vis:(legendOpen:!f)),P-8:(spy:(mode:(fill:!f,name:!n)))))",
      'T000' : "http://csm-v.eu-v.airbus-v.corp/app/kibana#/dashboard/Monitoring-dashboard?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-60d,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!t),panels:!((col:1,columns:!(incident_number,status,srid,assigned_group,application.environment,description,last_modified_date),id:Incident-listing,panelIndex:1,row:8,size_x:12,size_y:3,sort:!('@timestamp',desc),type:search),(col:3,id:BSM-Availability,panelIndex:2,row:1,size_x:10,size_y:2,type:visualization),(col:3,id:BSM-Performance,panelIndex:3,row:3,size_x:10,size_y:2,type:visualization),(col:1,id:Critical-incident,panelIndex:4,row:3,size_x:2,size_y:2,type:visualization),(col:1,id:Incidents-BMC,panelIndex:5,row:5,size_x:2,size_y:2,type:visualization),(col:1,id:Main-Markdown,panelIndex:6,row:1,size_x:2,size_y:2,type:visualization),(col:3,id:Outage-Timeline,panelIndex:7,row:5,size_x:10,size_y:3,type:visualization),(col:1,id:'Outage-slash-probe-slash-month-(max-duration-by-transaction)',panelIndex:8,row:11,size_x:6,size_y:6,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'App.Code:T000%20OR%20application.code:T000')),title:'Monitoring%20dashboard',uiState:(P-2:(vis:(legendOpen:!f)),P-3:(vis:(legendOpen:!f)),P-8:(spy:(mode:(fill:!f,name:!n)))))",
      '1T40' : ""
    };
    ctrl.$routerOnActivate = function (next) {
      ctrl.appCode = next.params.appCode;
      switch (ctrl.appCode) {
        case 'A420':
          ctrl.url = ctrl.jsonUrl["A420"];
          break;
        case 'F760':
          ctrl.url = ctrl.jsonUrl["F760"];
          break;
        case 'A282':
          ctrl.url = ctrl.jsonUrl["A282"];
          break;
        case '1Q09':
          ctrl.url = ctrl.jsonUrl["1Q09"];
          break;
        case 'T000':
          ctrl.url = ctrl.jsonUrl["T000"];
          break;
        case '1T40':
          ctrl.url = ctrl.jsonUrl["1T40"];
          break;
        default:
          ctrl.url = '';
      }
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

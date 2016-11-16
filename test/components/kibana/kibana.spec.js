(function() {
  'use strict';

  describe('Component: kibana', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.kibana'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Kibana Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('kibana', {$scope: $scope});
        expect(ctrl.name).toEqual('kibana ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Kibana templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<kibana></kibana>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


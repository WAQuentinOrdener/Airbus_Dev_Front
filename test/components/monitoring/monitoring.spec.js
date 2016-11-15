(function() {
  'use strict';

  describe('Component: monitoring', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.monitoring'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Monitoring Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('monitoring', {$scope: $scope});
        expect(ctrl.name).toEqual('monitoring ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Monitoring templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<monitoring></monitoring>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


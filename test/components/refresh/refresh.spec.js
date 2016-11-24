(function() {
  'use strict';

  describe('Component: refresh', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.refresh'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Refresh Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('refresh', {$scope: $scope});
        expect(ctrl.name).toEqual('refresh ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Refresh templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<refresh></refresh>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


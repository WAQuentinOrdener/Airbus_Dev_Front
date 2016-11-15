(function() {
  'use strict';

  describe('Component: tile', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.tile'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Tile Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('tile', {$scope: $scope});
        expect(ctrl.name).toEqual('tile ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Tile templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<tile></tile>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


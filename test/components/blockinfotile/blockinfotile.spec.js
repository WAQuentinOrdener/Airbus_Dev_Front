(function() {
  'use strict';

  describe('Component: blockinfotile', function () {

    var controller, compile, rootScope;

    beforeEach(module('airbus_dev_front.components.blockinfotile'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('BlockInfoTile Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('blockInfoTile', {$scope: $scope});
        expect(ctrl.name).toEqual('blockInfoTile ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('BlockInfoTile templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<block-info-tile></block-info-tile>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


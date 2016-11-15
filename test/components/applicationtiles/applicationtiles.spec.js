(function() {
  'use strict';

  describe('Component: applicationtiles', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.applicationtiles'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('ApplicationTiles Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('applicationTiles', {$scope: $scope});
        expect(ctrl.name).toEqual('applicationTiles ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('ApplicationTiles templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<application-tiles></application-tiles>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


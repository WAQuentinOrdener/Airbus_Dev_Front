(function() {
  'use strict';

  describe('Component: urlmodifier', function () {

    var controller, compile, rootScope;

    beforeEach(module('airbus_dev_front.components.urlmodifier'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('UrlModifier Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('urlModifier', {$scope: $scope});
        expect(ctrl.name).toEqual('urlModifier ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('UrlModifier templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<url-modifier></url-modifier>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


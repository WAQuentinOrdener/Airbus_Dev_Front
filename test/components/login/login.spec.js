(function() {
  'use strict';

  describe('Component: login', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.login'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Login Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('login', {$scope: $scope});
        expect(ctrl.name).toEqual('login ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Login templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<login></login>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


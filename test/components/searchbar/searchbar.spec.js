(function() {
  'use strict';

  describe('Component: searchbar', function () {

    var controller, compile, rootScope;

    beforeEach(module('Airbus_Dev_Front.components.searchbar'));
    beforeEach(module('templates'));

    beforeEach(inject(function($rootScope, $compile, $componentController) {
      controller = $componentController;
      compile = $compile;
      rootScope = $rootScope;
    }));

    describe('Searchbar Controller', function() {
      it('Test Case', function () {
        var $scope = {};

        // Controllerの生成
        var ctrl = controller('searchbar', {$scope: $scope});
        expect(ctrl.name).toEqual('searchbar ');

        // $onInitの実行
        ctrl.$onInit();
        expect(ctrl.onInit).toEqual('Success');
      });
    });

    // selector
    describe('Searchbar templateUrl', function() {
      it('Test Case', function () {
        var factory = compile('<searchbar></searchbar>');
        var scope = rootScope.$new();
        var element = factory(scope);
        scope.$digest();
        console.log(element);
      });
    });
  });
})();


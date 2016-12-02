(function () {
  'use strict';

  describe('Service: DataLoaderService', function() {

    var DataLoaderService, $rootScope;

    beforeEach(module('airbus_dev_front.service.dataloader'));

    beforeEach(inject(function (_$rootScope_, _DataLoaderService_) {
      DataLoaderService = _DataLoaderService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();

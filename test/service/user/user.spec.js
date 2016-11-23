(function () {
  'use strict';

  describe('Service: UserService', function() {

    var UserService, $rootScope;

    beforeEach(module('Airbus_Dev_Front.service.user'));

    beforeEach(inject(function (_$rootScope_, _UserService_) {
      UserService = _UserService_;
      $rootScope = _$rootScope_;
    }));

    describe('someThing', function() {
      it('someThing', function() {

      });
    });
  });
})();

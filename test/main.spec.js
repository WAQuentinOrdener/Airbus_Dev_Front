(function() {
  'use strict';

  describe('Controller: AppController', function () {

    beforeEach(module('Airbus_Dev_Front'));
    beforeEach(module('ngComponentRouter'));

    var AppController;

    beforeEach(inject(function ($controller) {
      AppController = $controller('AppController');
    }));
  });
})();

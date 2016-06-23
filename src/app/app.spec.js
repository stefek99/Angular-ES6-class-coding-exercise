import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    it('should contain the starter url', () => {
      expect(ctrl.url).toBe('https://github.com/preboot/angular-webpack');
    });
  });


  describe('service', () => {

    var service;
    
    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(function(_service_) {
        service = _service_;
      });
    });

    it('should add 2', () => {

      var result = service.add(17);
      expect(result).toBe(19);
    })

  })  

  describe('service2', () => {

    var service2;
    
    beforeEach(() => {
      angular.mock.module('app');

      angular.mock.inject(function(_service2_) {
        service2 = _service2_;
      });
    });

    it('should multiply 17', () => {

      var result = service2.multiply(17);
      expect(result).toBe(34);
    })

  })

});
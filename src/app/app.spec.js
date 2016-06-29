import app from './app';

describe('app', () => {


  describe('HomeCtrl', () => {
    let ctrl, $scope, databaseMock;

    beforeEach(() => {
      angular.mock.module(app);

      databaseMock = jasmine.createSpyObj('database', ['getEntries']);

      angular.mock.inject(($controller, $rootScope, $q) => {
        $scope = $rootScope.$new();
        $scope.user = {
          uid : "uid"
        };

        databaseMock.getEntries.and.returnValue($q.when([]));

        ctrl = $controller('HomeCtrl', {$scope: $scope, database: databaseMock});
      });
    });

    it('should contain the starter url', () => {
      expect(typeof ctrl.edit).toBe('function');
    });
  });


/*
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
    });

  });
*/
});
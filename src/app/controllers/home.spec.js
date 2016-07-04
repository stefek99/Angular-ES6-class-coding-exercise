import app from '../app';

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
      databaseMock.getRole.and.returnValue($q.when([]));

      ctrl = $controller('HomeCtrl', {$scope: $scope, database: databaseMock});
    });
  });

  // Keeping this file handy because I'd like to add more tests for the controllers
  it('should calculate 2 + 2', () => {
    expect(2+2).toBe(4);
  });
});
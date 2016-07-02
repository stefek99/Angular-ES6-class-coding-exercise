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

  it('should have edit method defined', () => {
    expect(typeof ctrl.edit).toBe("function");
  });
});
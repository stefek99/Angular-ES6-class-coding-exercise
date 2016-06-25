class HomeCtrl {
  constructor($scope, $state, currentAuth, database) {

    $scope.$state = $state;

    database.getEntries($scope.user.uid).then(function(entries) {
      $scope.entries = entries;
    });


  }
}

export default HomeCtrl;
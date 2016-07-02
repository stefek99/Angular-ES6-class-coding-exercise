class HomeCtrl {
  constructor($scope, $state, database, speed) {

    this.$state = $state; // so we are able to access $state and navigate
    this.uid = $scope.user.uid;

    database.getRole($scope.user.uid).then((role) => { // TODO: role of the user is rather generic --> make it generic (run)
      this.role = role.val();
      $scope.$apply();
    });

    database.getEntries(this.uid).then((entries) => {
      this.entries = angular.copy(entries);

      this.entries.forEach((entry) => {
        entry.timeDate = new Date(entry.time);
        entry.dateDate = new Date(entry.date);
        entry.state = "show";
        entry.speed = speed.get(entry.distance, entry.timeDate);
      });

    });

  }
}

export default HomeCtrl;
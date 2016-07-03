class AdminListCtrl {
  constructor($scope, $state, database, speed) {

    this.$state = $state; // so we can navigate from the view

    database.getUsers().then((users) => {
      this.users = users.val();
      $scope.$apply();
    });

  }
}

export default AdminListCtrl;
import Entry from '../models/entry';

class AdminCtrl {
  constructor($scope, $state, database, speed) {

    database.getUsers().then((users) => {
      this.users = users.val();
      $scope.$apply();
    });

  }
}

export default AdminCtrl;
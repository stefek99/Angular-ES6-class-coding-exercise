import Entry from '../../models/entry';

class AdminDetailCtrl {
  constructor($scope, $state, $stateParams, database, speed) {

    this.uid = $stateParams.uid;
    this.email = $stateParams.email;

  }
}

export default AdminDetailCtrl;
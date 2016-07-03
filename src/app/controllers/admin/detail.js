import Entry from '../../models/entry';

class AdminDetailCtrl {
  constructor($scope, $state, $stateParams, entries) {

    this.uid = $stateParams.uid;
    this.email = $stateParams.email;
    this.entries = entries;

  }
}

export default AdminDetailCtrl;
class HomeCtrl {
  constructor($rootScope, $state, entries, role) {

    this.$state = $state; // so we are able to access $state and navigate
    this.uid = $rootScope.user.uid;
    this.role = role;
    this.entries = entries;

  }
}

export default HomeCtrl;
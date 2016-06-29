import Entry from '../models/entry';

class HomeCtrl {
  constructor($scope, $state, database, speed) {

    this.$state = $state; // so we are able to access $state and navigate

    database.getEntries($scope.user.uid).then((entries) => {
      this.entries = angular.copy(entries);

      this.entries.forEach((entry) => {
        entry.timeDate = new Date(entry.time);
        entry.dateDate = new Date(entry.date);
        entry.state = "show";
        entry.speed = speed.get(entry.distance, entry.timeDate);
      });

    });

    this.edit = (entry) => {
      var copy = angular.copy(entry);
      entry.copy = copy;
      entry.state = "edit";
    };

    this.save = (entry) => {
      delete entry.copy;
      let saveMe = new Entry({ 
                             date : entry.dateDate.getTime(), 
                             distance : entry.distance, 
                             time : entry.timeDate.getTime()
                           });

      database.update($scope.user.uid, saveMe, entry.$id).then(function() {
        entry.speed = speed.get(entry.distance, entry.timeDate);
        entry.state = "show";
        $scope.$apply(); // saving is asynchronous, need update the view
      }, function(error) {
        console.error(error);
      });
    };

    this.revert = (entry) => {
      entry.timeDate = entry.copy.timeDate;
      entry.dateDate = entry.copy.dateDate;
      entry.state = "show";
      delete entry.copy;
    };

    this.confirmDelete = (entry) => {
      var index = this.entries.indexOf(entry);
      this.entries.splice(index, 1);

      database.deleteEntry($scope.user.uid, entry.$id);
    };
  }
}

export default HomeCtrl;
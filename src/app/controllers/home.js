import Entry from '../models/entry';

class HomeCtrl {
  constructor($scope, $state, currentAuth, database) {

    $scope.$state = $state; // so we are able to access $state and navigate

    database.getEntries($scope.user.uid).then(function(entries) {
      $scope.entries = angular.copy(entries);

      $scope.entries.forEach(function(entry) {
        entry.timeDate = new Date(entry.time);
        entry.dateDate = new Date(entry.date);
        entry.state = "show";
      });

    });

    $scope.edit = (entry) => {
      var copy = angular.copy(entry);
      entry.copy = copy;
      entry.state = "edit";
    };

    $scope.save = (entry) => {
      delete entry.copy;
      let saveMe = new Entry({ 
                             date : entry.dateDate.getTime(), 
                             distance : entry.distance, 
                             time : entry.timeDate.getTime()
                           });

      database.update($scope.user.uid, saveMe, entry.$id).then(function() {
        entry.state = "show";
        $scope.$apply(); // saving is asynchronous, need update the view
      }, function(error) {
        console.error(error);
      });
    };

    $scope.revert = (entry) => {
      entry.timeDate = entry.copy.timeDate;
      entry.dateDate = entry.copy.dateDate;
      entry.state = "show";
      delete entry.copy;
    };

    $scope.confirmDelete = (entry) => {
      var index = $scope.entries.indexOf(entry);
      $scope.entries.splice(index, 1);

      database.deleteEntry($scope.user.uid, entry.$id);
    };
  }
}

export default HomeCtrl;
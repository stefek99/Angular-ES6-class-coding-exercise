import Entry from '../models/entry';

let entries = (database, speed) => {

  return {
    templateUrl: "templates/directives/entries.html",
    scope: {
      data: '=',
      uid: '='
    },
    controller: function($scope) {

      // default values for filtering
      this.to   = new Date();
      this.from = new Date( new Date().setFullYear(this.to.getFullYear() - 1) ); // for some reason setFullYear returns a number so need to wrap up...

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

        database.update(this.uid, saveMe, entry.$id).then(function() {
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
        entry.distance = entry.copy.distance;
        entry.state = "show";
        delete entry.copy;
      };

      this.confirmDelete = (entry) => {
        var index = this.entries.indexOf(entry);
        this.entries.splice(index, 1);

        database.deleteEntry(this.uid, entry.$id);
      };

      this.fromTo = function() {
        var that = this; // required because of `this` and `closures`
        return function(entry) {
          return (entry.dateDate < that.to && entry.dateDate > that.from);
        };
      };
    },
    controllerAs: 'ctrl',
    bindToController: true // read more: http://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html
  };
};

export default entries;
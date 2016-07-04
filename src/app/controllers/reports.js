class ReportsCtrl {
  constructor($scope, average) {
    var self = this;

    this.date = new Date();

    let _calculateWeek = function() {
      let dotw = self.date.getDay(); // dow === day of the week

      self.beg = new Date(self.date);
      self.beg.setDate(self.beg.getDate() - 4);

      self.end = new Date(self.date);
      self.end.setDate(self.end.getDate() + 2);

      let entriesWithin = $scope.home.entries.filter((entry) => {
        return entry.date > self.beg && entry.date < self.end;
      });

      self.average = average.get(entriesWithin);
    };

    this.next = function() {
      var currentDate = this.date.getDate();
      this.date.setDate(currentDate + 7);
      _calculateWeek();
    };

    this.previous = function() {
      var currentDate = this.date.getDate();
      this.date.setDate(currentDate - 7);
      _calculateWeek();
    };

    _calculateWeek();

  }
}

export default ReportsCtrl;
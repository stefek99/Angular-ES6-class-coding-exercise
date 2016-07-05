class ReportsCtrl {
  constructor($scope, average) {
    var self = this;

    this.date = new Date();

    let _calculateWeek = function() {
      let dotw = self.date.getDay(); // dow === day of the week, remember 0 is Sunday
      // if 1 - end +6, beg -1
      // if 2 - end +5, beg -2
      // ...
      // if 6 - end +1, beg -6
      // if 0 - end +0, beg -7
      // if 7 - end +0, beg -7 
      dotw = dotw ? dotw : 7; // if 0 assigning 7 to simplify calculations

      self.beg = new Date(self.date);
      self.beg.setDate(self.beg.getDate() - (dotw - 1));

      self.end = new Date(self.date);
      self.end.setDate(self.end.getDate() + (7 - dotw));

      self.entriesWithin = $scope.home.entries.filter((entry) => {
        return entry.date > self.beg && entry.date < self.end;
      });

      if (self.entriesWithin.length > 0) { // think: I'll put division by 0 check in the service too (who knows who will end up using the code)
        self.average = average.get(self.entriesWithin);
      }

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
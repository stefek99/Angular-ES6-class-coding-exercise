// Report on average speed & distance per week

class ReportsCtrl {
  constructor($scope) {
    var self = this;

    this.date = new Date();

    let _calculateWeek = function() {
      let dotw = self.date.getDay(); // dow === day of the week

      self.beg = new Date(self.date);
      self.beg.setDate(self.beg.getDate() - 4);

      self.end = new Date(self.date);
      self.end.setDate(self.end.getDate() + 2);

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
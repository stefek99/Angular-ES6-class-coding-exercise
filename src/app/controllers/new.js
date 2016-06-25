import Entry from '../models/entry';

let NewCtrl = ($scope, $state, database) => {

  $scope.data = {
    date: new Date(),
    distance: 5.5,
    time: new Date(0,0,0,0,10,0)
  };

  $scope.addEntry = () => {

    database.addEntry(new Entry({ date : $scope.data.date, distance : $scope.data.distance, time : $scope.data.time }))
      .then(() => {
        $state.go("home");
      }, () => {
        alert("error");
      });


  };

};

export default NewCtrl;
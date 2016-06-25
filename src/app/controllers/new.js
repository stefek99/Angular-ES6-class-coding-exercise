import Entry from '../models/entry';

let NewCtrl = ($scope, $state, database) => {

  $scope.data = {
    date: new Date(),
    distance: 5.5,
    time: new Date(0,0,0,0,10,0)
  };

  $scope.addEntry = () => {

    // http://stackoverflow.com/questions/30021133/how-do-you-save-a-date-field-in-firebase-using-angularfire
    // cannot save 'DATE' directly - using getTime();

    let entry = new Entry({ 
                            date : $scope.data.date.getTime(), 
                            distance : $scope.data.distance, 
                            time : $scope.data.time.getTime()
                         });


    database.addEntry($scope.user.uid, entry)
      .then(() => {
        $state.go("home");
      }, () => {
        alert("error");
      });


  };

};

export default NewCtrl;
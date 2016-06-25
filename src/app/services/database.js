let database = ($q, $firebaseArray) => {
  return {
    addEntry : function(uid, entry) {
      var ref = firebase.database().ref('users/' + uid + '/entries');
      return ref.push(entry);
    },
    getEntries : function(uid) {
      var defer = $q.defer(); // Keeping everything asynchronous in case we want to ever replace Firebase with some other backend

      var ref = firebase.database().ref('users/' + uid + '/entries');
      defer.resolve($firebaseArray(ref));

      return defer.promise;
    }
  };
};

export default database;
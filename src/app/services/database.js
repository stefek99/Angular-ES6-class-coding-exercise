let database = ($q, $firebaseArray) => {

  let entries; // storing reference so we can cleanup

  return {
    addEntry : function(uid, entry) {
      var ref = firebase.database().ref('users/' + uid + '/entries');
      return ref.push(entry);
    },
    getEntries : function(uid) {
      // https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-objects.html
      // Returns a promise which is resolved when the initial server data has been downloaded.
      entries = $firebaseArray( firebase.database().ref('users/' + uid + '/entries') );
      return entries.$loaded();
    },
    update : function(uid, entry, entryId) {
      var ref = firebase.database().ref('users/' + uid + '/entries/' + entryId);
      return ref.update(entry);
    },
    testSave : function(index) {
      entries.$save(index);
    },
    deleteEntry : function(uid, entryId) {
      var ref = firebase.database().ref('users/' + uid + '/entries/' + entryId);
      return ref.set(null);
    },
    destroy : function() {
      entries.$destroy();
    },
    getRole : function(uid) {
      return firebase.database().ref('users/' + uid + '/role').once("value");
    },
    getUsers : function(uid) { // Only users with the 'admin' will be allowed, checked on the serverside Firebase rules
      return firebase.database().ref('users').once("value");
    }
  };
};

export default database;
let routerConfig = ($stateProvider, $urlRouterProvider) => {

  $urlRouterProvider.otherwise("/login");

  $stateProvider
    .state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: "LoginCtrl"
    })
    .state('home', {
      url: "/home",
      templateUrl: "templates/home.html",
      controller: "HomeCtrl",
      controllerAs: "home",
      resolve: {
        // https://www.firebase.com/docs/web/libraries/angular/guide/user-auth.html
        // controller will not be loaded until $requireAuth resolves
        currentAuth: function(auth) {
          // $requireSignIn returns a promise so the resolve waits for it to complete
          // If the promise is rejected, it will throw a $stateChangeError (see above)
          return auth.$requireSignIn();
        },
        entries: function($rootScope, database) {
          return database.getEntries($rootScope.user.uid);
        },
        role: function($rootScope, $q, database) {
          var defer = $q.defer();
          database.getRole($rootScope.user.uid).then((role) => {
            defer.resolve(role.val());
          });
          return defer.promise;
        }
      },
      redirectTo: 'home.list', // As seen on TV: http://stackoverflow.com/a/29491412/775359
    })
    .state('home.list', {
      templateUrl: "templates/home-list.html",
      url: '/list'
    })    
    .state('home.reports', {
      templateUrl: "templates/home-reports.html",
      url: '/reports',
      controller: "ReportsCtrl",
      controllerAs: "reports",
    })
    .state('new', {
      url: "/new",
      templateUrl: "templates/new.html",
      controller: "NewCtrl"
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "templates/admin/home.html",
      resolve: {
        role: function($rootScope, $q, database) {
          var defer = $q.defer();
          database.getRole($rootScope.user.uid).then((role) => {
            role = role.val();
            if (role === "admin") {
              defer.resolve();
            } else {
              defer.reject();
            }
          });
          return defer.promise;
        }
      }
    })
    .state('admin.list', {
      url: "/list",
      templateUrl: "templates/admin/list.html",
      controller: "AdminListCtrl",
      controllerAs: "admin"
    })
    .state('admin.detail', {
      url: "/detail/:uid/:email",
      templateUrl: "templates/admin/detail.html",
      controller: "AdminDetailCtrl",
      controllerAs: "admin",
      resolve: {
        entries: function($stateParams, database) {
          return database.getEntries($stateParams.uid);
        }
      }
    });
};

// $rootScope only available during run phase
let runConfig = ($rootScope, $state, database) => {

  // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
  firebase.auth().onAuthStateChanged(function(user) {
    $rootScope.user = user;
    if (!user) {
      $state.go("login");
    } else {
      firebase.database().ref("users/" + user.uid).update({ email : user.email });
    }
  });

  $rootScope.$on("$stateChangeError", function(event, next, previous, error) {
    console.warn("Not authenticated - redicreting to login");
    $state.go("login");
  });

  $rootScope.$on('$stateChangeStart', function(evt, to, params) {
    if (to.redirectTo) {
      evt.preventDefault();
      $state.go(to.redirectTo, params);
    }
  });

  $rootScope.signOut = () => {
    database.destroy(); // REQUIRED: otherwise we will try to sync data while we are not authenticated

    firebase.auth().signOut().then(function() {
      $state.go("login");
    }, function(error) {
      console.error(error);
    });

  };
};

var firebaseConfig = {
  apiKey: "AIzaSyDPjSD7KBNFIf2YkGsOqsyq0TvvG9R2Kic",
  authDomain: "toptal-b6f8d.firebaseapp.com",
  databaseURL: "https://toptal-b6f8d.firebaseio.com",
  storageBucket: "",
};

export {routerConfig, runConfig, firebaseConfig};
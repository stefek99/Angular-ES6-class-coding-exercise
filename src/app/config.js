let config = ($stateProvider, $urlRouterProvider) => {

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
      controller: "HomeCtrl"
    })    
    .state('new', {
      url: "/new",
      templateUrl: "templates/new.html",
      controller: "NewCtrl"
    });
};

// $rootScope only available during run phase
let runConfig = ($rootScope) => {

  // https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
  firebase.auth().onAuthStateChanged(function(user) {
    $rootScope.user = user;
  });

};

export {config, runConfig};
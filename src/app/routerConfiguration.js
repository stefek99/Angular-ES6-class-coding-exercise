let routerConfiguration = ($stateProvider, $urlRouterProvider) => {

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
    })

};

export default routerConfiguration;
import angular from 'angular';

import service from './service';
import service2 from './service2';

import '../style/app.css';

let app = () => {
  return {
    template: require('./app.html'),
    controller: 'AppCtrl',
    controllerAs: 'app'
  }
};

let ScopeCtrl = ($scope, service, service2) => {

  $scope.message = "dupa";


  $scope.ser = () => {
    console.log( service.add(17) );
  }  

  $scope.ser2 = () => {
    console.log( service2.multiply(17) );
  }
}

class AppCtrl {
  constructor(service) {
    this.url = 'https://github.com/preboot/angular-webpack';

    this.method = () => {
      console.log("method");
    }

    this.ser = () => {
      console.log( service.add(17) );
    }
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl)
  .service('service', service)
  .service('service2', service2);

export default MODULE_NAME;
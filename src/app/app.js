import angular from 'angular';

import service from './services/service';
import service2 from './services/service2';

import LoginCtrl from './controllers/login';
import HomeCtrl from './controllers/home';

import routerConfiguration from './routerConfiguration';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';

import '../style/app.css';



const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, angularfire])
  .controller('LoginCtrl', LoginCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .service('service', service)
  .service('service2', service2)
  .config(routerConfiguration)

export default MODULE_NAME;
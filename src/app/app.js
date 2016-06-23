import angular from 'angular';
import firebase from 'firebase';

import overlay from './services/overlay';

import LoginCtrl from './controllers/login';
import HomeCtrl from './controllers/home';

import routerConfiguration from './routerConfiguration';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';

import '../style/app.css';

var config = {
  apiKey: "AIzaSyDPjSD7KBNFIf2YkGsOqsyq0TvvG9R2Kic",
  authDomain: "toptal-b6f8d.firebaseapp.com",
  databaseURL: "https://toptal-b6f8d.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, angularfire])
  .controller('LoginCtrl', LoginCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .service('overlay', overlay)
  .config(routerConfiguration)

export default MODULE_NAME;
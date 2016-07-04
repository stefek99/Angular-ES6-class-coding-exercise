import angular from 'angular';
import firebase from 'firebase';

import overlay from './services/overlay';
import database from './services/database';
import auth from './services/auth';
import speed from './services/speed';

import LoginCtrl from './controllers/login';
import HomeCtrl from './controllers/home';
import NewCtrl from './controllers/new';
import ReportsCtrl from './controllers/reports';
import AdminListCtrl from './controllers/admin/list';
import AdminDetailCtrl from './controllers/admin/detail';

import entries from './directives/entries';

import {routerConfig, runConfig, firebaseConfig} from './config';
import uirouter from 'angular-ui-router';
import angularfire from 'angularfire';

import '../style/styles.scss';

firebase.initializeApp(firebaseConfig);

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uirouter, angularfire])
  .controller('LoginCtrl', LoginCtrl)
  .controller('HomeCtrl', HomeCtrl)
  .controller('NewCtrl', NewCtrl)
  .controller('ReportsCtrl', ReportsCtrl)
  .controller('AdminListCtrl', AdminListCtrl)
  .controller('AdminDetailCtrl', AdminDetailCtrl)
  .service('overlay', overlay)
  .service('database', database)
  .service('auth', auth)
  .service('speed', speed)
  .directive('entries', entries)
  .config(routerConfig)
  .run(runConfig);

export default MODULE_NAME;
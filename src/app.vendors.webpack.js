// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
import 'angular-material';
import 'angular-material/angular-material.css';
import 'angular-messages';
import 'angular-animate';
import 'angular-aria';
import 'angular-ui-router';
import 'angular-ui-router.statehelper';
import 'lodash';
import 'moment';

const req = require.context('./app', true, /^(?!.*spec.js)((.*\.(js$))[^.]*$)/igm);
req.keys().forEach((key) => {
  req(key);
});

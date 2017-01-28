var angular = require('angular');

var main = require('./app/container/Main');
var userData = require('./app/services/userData');
var userList = require('./app/components/userList/userLists');
var userInfo = require('./app/components/userDetailedInfo/usersInfo');
var filterInput = require('./app/components/filterInput/filterInput');

require('./index.css');

var app = 'app';
module.exports = app;
require('angular-material');

angular
  .module(app, ['ngMaterial'])
  .component('app', main)
  .component('userList', userList)
  .component('userInfo', userInfo)
  .component('filterInput', filterInput)
  .service('userData', userData.users);

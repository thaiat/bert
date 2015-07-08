'use strict';
require('angular-ui-router');
require('angular-ionic');
require('angular-material');
require('famous-angular');
require('ng-cordova');

var modulename = 'workouts';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, ['ui.router', 'ionic', 'famous.angular', 'ngCordova', 'ngMaterial']);
    // inject:folders start
    require('./controllers')(app);
    // inject:folders end


    return app;
};
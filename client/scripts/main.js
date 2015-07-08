'use strict';

var namespace = 'main';

var angular = require('angular');
require('angular-ionic');
require('angular-material');
var app = angular.module(namespace, ['ionic', 'ngMaterial',
    // inject:modules start
    
    require('./common')(namespace).name,
    
        require('./dashboard')(namespace).name,
    
        require('./drawers')(namespace).name,
    
        require('./exercises')(namespace).name,
    
        require('./initialView')(namespace).name,
    
        require('./settings')(namespace).name,
    
        require('./workouts')(namespace).name
    
    // inject:modules end
]);

var runDeps = ['$ionicPlatform', '$window'];
var run = function($ionicPlatform, $window) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if($window.cordova && $window.cordova.plugins.Keyboard) {
            $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if($window.StatusBar) {
            $window.StatusBar.styleDefault();
        }
        if($window.TestFairy) {
            $window.TestFairy.begin(process.env.TESTFAIRY_IOS_APP_TOKEN);
        }
    });
};

run.$inject = runDeps;
app.run(run);

module.exports = app;
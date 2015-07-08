'use strict';

var namespace = 'main';

var angular = require('angular');
require('angular-ionic');
require('angular-material');
require('parse-angular-patch');


var app = angular.module(namespace, ['ionic', 'ngMaterial', 'parse-angular',
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

        /**
         * require the injected services to be
         * instantiated before other parts of the modules run and also
         * initialises Parse
         */
       Parse.initialize('xxxxx', 'xxxxxx');
       //console.log(Parse.User.current());

    });
};

var configDeps = ['$stateProvider', '$urlRouterProvider'];
var config = function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/app/berts/dashboard');

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            template: require('./common/views/app.wrapper.html')
        })
        .state('app.berts', {
            url: '/berts',
            abstract: true,
            views: {
                'mainContent': {
                    template: require('./common/views/main.content.html')
                },
                'leftDrawer': {
                    template: require('./drawers/views/left.drawer.html')
                }

            }
        })
        .state('app.berts.dashboard', {
            url: '/dashboard',
            views: {
                'appContent': {
                    template: require('./dashboard/views/dashboard.html'),
                    controller: 'main.dashboard.dashboardCtrl'
                }
            }
        })

        .state('app.berts.exercises', {
            url: '/exercises',
            views: {
                'appContent': {
                    template: require('./exercises/views/exercises.html'),
                    controller: 'main.exercises.exercisesCtrl'
                }
            }
        })
        .state('app.berts.workouts', {
            url: '/workouts',
            views: {
                'appContent': {
                    template: require('./workouts/views/workouts.html'),
                    controller: 'main.workouts.workoutsCtrl'
                }
            }
        })
        .state('app.berts.settings', {
            url: '/settings',
            views: {
                'appContent': {
                    template: require('./settings/views/settings.html'),
                    controller: 'main.settings.settingsCtrl'
                }
            }
        })
    ;
};


run.$inject = runDeps;
app.run(run);

config.$inject = configDeps;
app.config(config);

module.exports = app;
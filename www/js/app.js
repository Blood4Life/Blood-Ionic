// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('blood-ionic', ['ionic', 'starter.controllers','starter.services','starter.factories','uiGmapgoogle-maps','ngCordova'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            Parse.initialize("YeLbumWkWfcKts17YdFObdhHh7Bvn0Hp5PhZpmxq", "7xGSHfl8ebyizwL1c7T8UnrH8yAfFjXIWJb6seVc");
        });
    })

    .config(function($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {

        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDFberVyWaVDCxFLaRxYLxUuSd4uPb_I2s',
            v: '3.17',
            libraries: 'weather,geometry,visualization',
            language: 'en',
            sensor: 'false',
        })

        $stateProvider.state('splash',{
            url: "/splash",
            templateUrl: "templates/splash.html"
        });

        $stateProvider.state('login',{
            url: "/login",
            templateUrl: "templates/login.html",
            controller : 'LoginCtrl'
        });

        $stateProvider.state('signup',{
            url: "/signup",
            templateUrl: "templates/signup.html",
            controller: 'SignupCtrl'
        });

        $stateProvider.state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/menu.html",
            controller: 'AppCtrl'
        });

        $stateProvider.state('app.profile', {
            url: "/profile",
            views: {
                'menuContent': {
                    templateUrl: "templates/profile.html"//exists
                }
            }
        });

        $stateProvider.state('app.donors', {
            url: "/donors",
            views: {
                'menuContent': {
                    templateUrl: "templates/donors.html"
                }
            }
        });

        $stateProvider.state('app.search', {
            url: "/search",
            views: {
                'menuContent': {
                    templateUrl: "templates/search.html",
                    controller: "SearchDonorsCtrl"
                }
            }
        });

        $stateProvider.state('app.recentAlerts', {
            url: "/recentAlerts",
            views: {
                'menuContent': {
                    templateUrl: "templates/alerts.html"
                }
            }
        });

        $stateProvider.state('app.map', {
            url: "/map",
            params : {donors : null},
            views: {
                'menuContent': {
                    templateUrl: "templates/map.html",
                    controller: "MapCtrl"
                }
            }
        });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/splash');
    });

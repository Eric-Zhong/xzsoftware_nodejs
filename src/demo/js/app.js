/* eslint no-alert: 0 */

"use strict";

var appName = "demo";

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module("mobileApp", [
    "mobile-angular-ui",
    "mobile-angular-ui.gestures",
    "ui.swiper",
    "ui.router"
]);


/**
 * angular 应用程序启动
 */
app.run(function($transform) {
    window.$transform = $transform;
});



app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state("home", {
        url: "/",
        controller: "visTimelineCtrl",
        templateUrl: appName + "/vis_timeline"
    });
});

//
// For this trivial demo we have just a unique MainController
// for everything
//
app.controller("mainCtrl", function($rootScope, $scope) {

    var vm = this;

    // Needed for the loading screen
    $rootScope.$on("$routeChangeStart", function() {
        $rootScope.loading = true;
    });

    $rootScope.$on("$routeChangeSuccess", function() {
        $rootScope.loading = false;
    });

    // User agent displayed in home page
    $scope.userAgent = navigator.userAgent;

});
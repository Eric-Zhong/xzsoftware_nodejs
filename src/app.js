/* eslint no-alert: 0 */

'use strict';

//
// Here is how to define your module
// has dependent on mobile-angular-ui
//
var app = angular.module('mobileApp', [
    'mobile-angular-ui',
    'mobile-angular-ui.gestures',
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
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('home', {
        url: '/',
        templateUrl: '/page'
    });
    $stateProvider.state('appointment', {
        url: '/appointment',
        templateUrl: '/page/appointment'
    });
    $stateProvider.state('activity', {
        url: '/activity',
        template: '这里显示平台的活动介绍，如【历史出车】【下周出车】【找你帮忙】等。'
    });
    $stateProvider.state('help', {
        url: '/help',
        templateUrl: "/page/help"
    });
    $stateProvider.state('my', {
        url: '/my',
        template: '显示个人设置相关信息，如【我的预约】【我的婚车】【个人信息】【联系方式】等。'
    });
});

//
// For this trivial demo we have just a unique MainController
// for everything
//
app.controller('mainCtrl', function($rootScope, $scope) {

    var vm = this;

    // Needed for the loading screen
    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.loading = true;
    });

    $rootScope.$on('$routeChangeSuccess', function() {
        $rootScope.loading = false;
    });

    // User agent displayed in home page
    $scope.userAgent = navigator.userAgent;

});
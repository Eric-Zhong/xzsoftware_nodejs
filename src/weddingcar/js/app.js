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
        url: '/?:from',
        params: {
            eu: "customer", // End-User ?
            v: 1001
        },
        views: {
            "main": {
                templateUrl: '/weddingcar/index'
            },
            "footbar": {
                templateUrl: '/weddingcar/footbar',
                controller: "footbarCtrl"
            }
        },
        desc: "首页导航"
    });
    $stateProvider.state('appointment', {
        url: '/appointment',
        templateUrl: '/weddingcar/order/create'
    });
    $stateProvider.state('activity', {
        url: '/activity',
        template: '这里显示平台的活动介绍，如【历史出车】【下周出车】【找你帮忙】等。'
    });
    $stateProvider.state('help', {
        url: '/help',
        templateUrl: "/weddingcar/help"
    });
    $stateProvider.state('my', {
        url: '/my',
        template: '显示个人设置相关信息，如【我的预约】【我的婚车】【个人信息】【联系方式】等。'
    });
    $stateProvider.state('driver', {
        params: {
            eu: "driver", // Driver ?
            v: 1001
        },
        views: {
            // Default Ui-View
            "main": {
                templateUrl: "/weddingcar/driver/index"
            },
            "footbar": {
                templateUrl: '/weddingcar/footbar',
                controller: "footbarCtrl"
            },
            "header": {
                template: "ddddddddddddddddddd"
            }
        },
        // template: '显示车友首页',
        createdBy: "Eric-Zhong.Xu"
    });
    $stateProvider.state("driver.index", {
        url: "/driver/index",
        views: {
            // Default Ui-View
            "main@driver": {
                templateUrl: "/weddingcar/driver/index"
            },
            "footbar@driver": {
                templateUrl: '/weddingcar/footbar',
                controller: "footbarCtrl"
            },
            "main@driver.index": {
                template: "hhhhhhhhhhhhhhhh"
            },
            "header@driver": {
                template: "ddddddddddddddddddd"
            }
        },
        // template: '显示车友首页',
        createdBy: "Eric-Zhong.Xu"
    });
});

//
// For this trivial demo we have just a unique MainController
// for everything
//
app.controller('mainCtrl', function($rootScope, $scope) {

    var vm = this;

    // Needed for the loading screen
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            console.log("---------------- state change start -------------");
            // console.log(fromState);
            // console.log(fromParams);
            // console.log(toState);
            // console.log(toParams);
            $rootScope.loading = true;
        }
    );


    $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams) {
            console.log("---------------- state change success -------------");
            console.log({
                info: "From",
                state: fromState,
                params: fromParams
            });
            console.log({
                info: "To",
                state: toState,
                params: toParams
            });
            $rootScope.loading = false;
        });


    $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error) {
            console.log("Route error");
            console.log(error);
        }
    );


    // User agent displayed in home page
    $scope.userAgent = navigator.userAgent;

});
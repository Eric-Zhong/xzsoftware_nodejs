(function() {
    'use strict';

    angular
        .module('mobileApp')
        .controller('swiperCtrl', swiperCtrl)

    swiperCtrl.$inject = ["$http", "$scope", "$rootScope", "$location", "$stateParams"];

    function swiperCtrl($http, $scope, $rootScope, $location, $stateParams) {
        /* jshint validthis:true */
        var vm = this;

        console.log({
            title: "swiper ctrl",
            location: $location,
            stateParams: $stateParams
        });

        $scope.swiperOption = {};
        $scope.$on('$viewContentLoading',
            function(event, viewConfig) {
                // Access to all the view config properties.
                // and one special property 'targetView'
                // viewConfig.targetView 
                consone.log({
                    title: "view content loading",
                    event: event,
                    viewConfig: viewConfig
                });
            }
        );


        activate();

        function activate() {
            $scope.swiperOption = {
                autoplay: true,
                waiting: 2500,
                lazyLoading: true,
                items: [{
                    imageUrl: "/images/home_03.jpg",
                    title: "Not declare"
                }, {
                    imageUrl: "/images/home_02.jpg",
                    title: "Not declare"
                }, {
                    imageUrl: "/images/home_01.jpg",
                    title: "Not declare"
                }]
            };
        }
    }
})();
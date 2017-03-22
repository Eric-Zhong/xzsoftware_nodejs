(function() {
    'use strict';

    angular
        .module('mobileApp')
        .controller('settingCtrl', settingCtrl)

    settingCtrl.$inject = ['$location'];

    function settingCtrl($location) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() {
            console.log("为什么在这里会执行两次呢？")
        }
    }
})();
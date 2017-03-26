(function() {
    'use strict';

    angular
        .module('mobileApp')
        .controller('footbarCtrl', footbarCtrl);

    footbarCtrl.$inject = ["$scope", '$stateParams', '$http'];

    function footbarCtrl($scope, $stateParams, $http) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() {
            var type = "default";
            if ($stateParams.eu) {
                switch ($stateParams.eu) {
                    case "customer":
                        type = "customer";
                        break;
                    case "driver":
                        type = "driver";
                        break;
                }
            }
            $scope.type = type;
            console.log($stateParams);
        }
    }
})();
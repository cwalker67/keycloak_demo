(function() {
    'use strict';

    angular
        .module('hogwarts.user')
        .config(['$routeProvider',config]);


    /** @ngInject */
    function config($routeProvider) {
        $routeProvider.when('/user', {
            templateUrl: 'app/components/user/user.html',
            controller: 'UserCtrl'
        });
    }

})();
